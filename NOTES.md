## 1. Verification Steps

1. `npm run dev:tech-assessment-react-mode`
2. Navigate to `http://localhost:4200/delivery-configurations/create`
3. DevTools console — confirm GET fires on load and logs array sorted oldest → newest by `acceptedAt`
4. Fill form with `deliveryLocation = email`, `combineFiles = true`, submit — confirm 201 success alert; form resets
5. Navigate to `http://localhost:4200/delivery-configurations/create?error=true`, fill and submit — confirm error alert appears
6. `npx nx build tech-assessment-react` — confirm zero TypeScript/build errors

---

## 2. Key Gotchas

| # | Gotcha | Rule |
|---|---|---|
| 1 | Custom event prop casing | `onclickEventOutput`, `onitemSelectedOutput`, `oncloseEventOutput` — lowercase `on` + **exact event name casing**. Wrong case silently fails to fire. |
| 2 | Dropdown `detail` type | `e.detail` from `itemSelectedOutput` is `string[]` (the full new activeIds array). Take `e.detail[0]` for single-select. |
| 3 | Controlled checkboxes | Always pass `checked={form.fieldName}` to `atp-checkbox`. Without it the component manages its own state and desyncs from React. |
| 4 | Body field (textarea) | Pass `textarea` boolean prop to `atp-input-field` AND use a `<textarea>` element (not `<input>`) as the slotted child. Both are required. |
| 5 | `maximumFileSize` as string | Native `input[type=number]` returns a string from `e.target.value`. Store as string, convert with `Number()` only in the submit payload where the API expects a number. |
| 6 | `?error=true` testing | The server matches `POST /api/three-v-deliveries?error=true` exactly. Use `useSearchParams` to forward this from the page URL to the fetch URL — do NOT hardcode it. |
| 7 | Build check | Run `npx nx build tech-assessment-react` before submitting. Must exit with zero errors. |

---

## 3. Interview Preparation: Why Each Decision Was Made

### React 19 + web components: why we spread event props
`@atpco/atp-web` uses Lit custom elements. React 19 (unlike React 18) natively supports web
component custom events — it calls `addEventListener` for any `on<EventName>` JSX prop.
The package's JSX types (`@atpco/atp-web/react`) describe element *properties* and *attributes*
but not event handlers, so writing an event handler inline causes a TypeScript error. The fix:
define a typed local object and spread it onto the element. This is the exact pattern the starter
already uses for `sidebarEventProps` — we extend it to checkboxes, dropdowns, and alerts.

### Why event prop casing is so strict
React 19 passes `on<EventName>` directly to `addEventListener`. `addEventListener` is
case-sensitive on custom events. The Lit source dispatches `clickEventOutput` (not
`ClickEventOutput`, not `clickeventoutput`). A single wrong character silently breaks the
listener with no error.

### Why the dropdown uses a readonly input
`atp-dropdown` is a list/menu component, not a `<select>`. It manages open/close and item
highlighting. Placing it in `slot="dropdown"` inside `atp-input-field` causes the field to
auto-add a chevron and toggle the dropdown on click. The readonly `<input>` displays the
selected option's label (`"Google Cloud"`) while form state holds the ID (`"gcloud"`).

### Why `AlertColor.INFO` for success
The Lift palette exposes only `DANGER`, `WARNING`, and `INFO` — there is no `SUCCESS` variant.
`INFO` (neutral/blue) is the appropriate choice for a positive confirmation message.

### Why `maximumFileSize` is stored as a string
Native `<input type="number">` yields a string from `e.target.value`. Converting to `Number()`
on every keystroke would cause `NaN` to flash into state briefly. Storing as string keeps
controlled-input behavior clean; the single `Number()` conversion happens in the submit payload
builder where the API expects a number type.

### Why conditional rendering, not CSS hide
Unmounting the fields from the DOM prevents two bugs: (1) stale email field values leaking into
a non-email POST payload (the payload builder spreads based on current `form.deliveryLocation`),
and (2) hidden `required` fields blocking native browser form validation.

### Why `useSearchParams` for `?error=true`
The server routes `POST /api/three-v-deliveries?error=true` to a 500 via an exact URL match.
Hardcoding a toggle would require a code change to test; using `useSearchParams()` forwards the
query param from the page URL to the fetch URL automatically. Normal submissions (no query param)
are unaffected.

### Two non-obvious TypeScript fixes worth knowing for the interview

**1. `class` not `className` on web components**

`WebComponentProps<T>` (the type that wraps every `atp-*` element in JSX) explicitly declares
`class?: string` — not `className`. This is because `className` is a React synthetic prop that
React maps to the `class` DOM attribute for regular HTML elements. Web components sit outside
React's synthetic event system, so they use the raw DOM attribute name `class`. Using
`className="form-field"` on an `atp-input-field` causes a TypeScript error at compile time;
`class="form-field"` is correct and the build passes.

**2. `role` on `atp-alert` must go in the spread object, not as an inline prop**

`WebComponentProps<T>` is built with a mapped type that filters out any key that already exists
on the standard `HTMLElement` interface:
```ts
[K in keyof T as K extends keyof HTMLElement ? never : K]?: T[K]
```
`role` IS a standard `HTMLElement` property (the ARIA role attribute), so it gets excluded from
`WebComponentProps<Alert>` even though `Alert` has its own `role: AlertRole` property. Setting
`role={AlertRole.STATUS}` as an inline prop causes a TS2322 error. The fix: include `role` in
the `AlertEventProps` spread type (`role?: string`) and set it there. TypeScript uses
**assignability checking** (not excess-property checking) when evaluating spread arguments in
JSX — extra properties in a spread are allowed. This is the same mechanism that lets all our
custom event handler spreads compile cleanly.
