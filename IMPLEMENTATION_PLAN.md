# Implementation Plan: Create Delivery Configuration Form

## Overview

Implement the Create Delivery Configuration form at `/delivery-configurations/create` using the Lift Design System (`@atpco/atp-web`), matching the provided Figma mockup. The form connects to the local API for GET (on load) and POST (on submit).

**Framework:** React (React Router framework mode)  
**File to edit:** `apps/tech-assessment-react/app/routes/delivery-configuration-create.tsx`  
**Styles to edit:** `apps/tech-assessment-react/styles.css`

**What the starter already provides:** full page layout, header, `atp-sidebar` with navigation
events wired, breadcrumbs, and `<h1>`. The sidebar's spread-event-props pattern is the template
for every other custom event in this file.

---

## 1. Imports & Types

```ts
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';      // needed for ?error=true test helper
import type { BreadcrumbItem, SidebarItem } from '@atpco/atp-web';
import {
  AlertColor,
  AlertAppearance,
  AlertRole,
  DropdownSelectionMode,
} from '@atpco/atp-web';
```

> **All enums verified** in `vendor/atp-web/package/lib/` type definitions:
> `AlertColor` (INFO, DANGER), `AlertAppearance` (PAGE), `AlertRole` (STATUS, ALERT),
> `DropdownSelectionMode` (SINGLE).

### Types

```ts
type DeliveryLocation = 'email' | 'gcloud' | 'azure' | 's3';

interface FormState {
  deliveryName: string;
  customer: string;
  deliveryFrequency: string;
  last_file_suffix: string;
  deliveryLocation: DeliveryLocation;
  // email-only
  recipients: string;
  subject: string;
  body: string;
  // non-email (cloud/S3)
  bucket: string;
  credentialsFile: string;
  upload_option: string;
  // always-visible
  deliveryFileName: string;
  combineFiles: boolean;
  // combineFiles sub-fields
  maximumFileSize: string;   // stored as string, parsed to Number() on submit
  compression: boolean;
  specificDirectory: boolean;
  virusScan: boolean;
  encrypt: boolean;
}
```

Define local event prop types for all four custom event wires. React 19's JSX types describe
element *properties/attributes* but not custom event handlers, so inline event props cause type
errors — type them locally and spread onto the element (same pattern as the existing
`sidebarEventProps` in the starter).

| Local type | Prop | Fires from | Detail |
|---|---|---|---|
| `SidebarEventProps` | `onnavigationEventOutput` | `atp-sidebar` | `{ id?: string }` |
| `CheckboxEventProps` | `onclickEventOutput` | `atp-checkbox` | `CustomEvent` |
| `DropdownEventProps` | `onitemSelectedOutput` | `atp-dropdown` | `string[]` (new activeIds) |
| `AlertEventProps` | `oncloseEventOutput` | `atp-alert` | `CustomEvent` |

> **All event names verified** in `vendor/atp-web/package/index.js` and the component stories.
> These are the exact strings dispatched by each Lit component — casing is critical (see §12).

---

## 2. Constants

```ts
const LOCATION_OPTIONS = [
  { name: 'Email',        id: 'email'  },
  { name: 'Google Cloud', id: 'gcloud' },
  { name: 'Azure',        id: 'azure'  },
  { name: 'S3',           id: 's3'     },
];

const INITIAL_FORM: FormState = {
  deliveryName: '', customer: '', deliveryFrequency: '', last_file_suffix: '',
  deliveryLocation: 's3',
  recipients: '', subject: '', body: '',
  bucket: '', credentialsFile: '', upload_option: '',
  deliveryFileName: '',
  combineFiles: false,
  maximumFileSize: '', compression: false,
  specificDirectory: false, virusScan: false, encrypt: false,
};
```

Default `deliveryLocation` to `'s3'` — matches the Figma "unfilled" mockup.

Keep existing `SIDEBAR_ITEMS` and `BREADCRUMB_ITEMS` unchanged.

---

## 3. Component State

```ts
const [activeSidebarId, setActiveSidebarId] = useState('delivery-configurations');
const [form, setForm]                       = useState<FormState>(INITIAL_FORM);
const [submitStatus, setSubmitStatus]       = useState<'idle' | 'success' | 'error'>('idle');
const [isSubmitting, setIsSubmitting]       = useState(false);
const [searchParams]                        = useSearchParams();   // for ?error=true forwarding
```

---

## 4. On-Load Effect

```ts
useEffect(() => {
  fetch('/api/three-v-deliveries')
    .then(res => res.json())
    .then(({ data }) => {
      const sorted = [...(data ?? [])].sort(
        (a, b) => new Date(a.acceptedAt).getTime() - new Date(b.acceptedAt).getTime()
      );
      console.log('Existing delivery configurations (oldest → newest):', sorted);
    });
}, []);
```

The empty dependency array `[]` makes this run once after mount (equivalent to `ngOnInit`).
The sort expression: `getTime()` returns milliseconds since epoch; positive result means `b`
is older, so they swap — result is ascending (oldest first).

---

## 5. Event Helpers

**Text/textarea field change:**
```ts
const fieldChange = (field: keyof FormState) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));
```

**Checkbox toggle** (returns a spread-able `CheckboxEventProps` object):
```ts
const checkboxToggle = (field: keyof FormState): CheckboxEventProps => ({
  onclickEventOutput: () => setForm(f => ({ ...f, [field]: !f[field] })),
});
```

**Delivery location dropdown:**
```ts
const locationDropdownEvents: DropdownEventProps = {
  onitemSelectedOutput: (e) => {
    const id = e.detail?.[0] as DeliveryLocation;
    if (id) setForm(f => ({ ...f, deliveryLocation: id }));
  },
};
```

---

## 6. Form Fields (Figma Order)

All text fields use `atp-input-field` wrapping a native `<input>`, with `<label slot="label">` and optional `<span slot="help-text">`.

### Always-visible fields

| # | Label | Type | Notes |
|---|---|---|---|
| 1 | Delivery configuration name * | `input[type=text]` | required |
| 2 | Customer * | `input[type=text]` | required |
| 3 | Delivery frequency in cron format | `input[type=text]` | Optional. Placeholder `20 * * * *`. Help text links to crontab.guru |
| 4 | Last file suffix | `input[type=text]` | Optional. Placeholder `ex. -final`. Help text: "Input can only contain letters, numbers, -, and _" |
| 5 | Delivery location * | `atp-input-field` + `input[readonly]` + `atp-dropdown` | See §7 |

### Conditional: Delivery location = `email`

Rendered inside a `.conditional-fields` div (indented):

| Label | Notes |
|---|---|
| Recipient email * | Maps to API field `recipients` |
| Subject * | |
| Body * | Pass `textarea` prop to `atp-input-field` + use `<textarea>` element inside |

### Conditional: Delivery location ≠ `email`

Rendered inside a `.conditional-fields` div (indented):

| Label | Notes |
|---|---|
| Bucket * | |
| Credentials file * | Maps to API field `credentialsFile` |
| Upload option * | Maps to API field `upload_option` |

### Always-visible (continued)

| # | Label | Type | Notes |
|---|---|---|---|
| 6 | Delivery file name * | `input[type=text]` | Help text: "Input can only contain letters, numbers, -, and _" |
| 7 | Combine files | `atp-checkbox` | Controlled: `checked={form.combineFiles}` + `onclickEventOutput` toggle |

### Conditional: `combineFiles === true`

Rendered inside a `.conditional-fields` div (indented):

| Label | Type | Notes |
|---|---|---|
| Maximum file size (MB) * | `input[type=number]` | Maps to `maximumFileSize`; store as string, parse on submit |
| Check file size post compression | `atp-checkbox` | Maps to `compression` |

### Always-visible (continued)

| # | Label | Notes |
|---|---|---|
| 8 | Place files into specific delivery directory | Maps to `specificDirectory` |
| 9 | Virus scan | Maps to `virusScan` |
| 10 | Use encryption | Maps to `encrypt` |

> **Why conditional rendering (not CSS hide):** Removing fields from the DOM prevents stale
> values from leaking into the submit payload and stops hidden `required` fields from blocking
> native form validation.

---

## 7. Select Pattern (Delivery Location)

`atp-input-field` auto-adds the chevron icon when a `slot="dropdown"` child is present,
so no `iconRight` prop needed. The readonly input shows the human-readable label while form
state tracks the ID.

```tsx
<atp-input-field required className="form-field">
  <label slot="label" htmlFor="deliveryLocation">Delivery location</label>
  <input
    id="deliveryLocation"
    type="text"
    readOnly
    value={LOCATION_OPTIONS.find(o => o.id === form.deliveryLocation)?.name ?? ''}
  />
  <atp-dropdown
    slot="dropdown"
    itemsList={LOCATION_OPTIONS}
    activeIds={[form.deliveryLocation]}
    selectionMode={DropdownSelectionMode.SINGLE}
    showCheckmarks={true}
    {...locationDropdownEvents}
  />
</atp-input-field>
```

---

## 8. Submit Handler

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  const payload = {
    deliveryName: form.deliveryName,
    customer: form.customer,
    deliveryLocation: form.deliveryLocation,
    deliveryFileName: form.deliveryFileName,
    combineFiles: form.combineFiles,
    specificDirectory: form.specificDirectory,
    virusScan: form.virusScan,
    encrypt: form.encrypt,
    // Optional
    ...(form.deliveryFrequency && { deliveryFrequency: form.deliveryFrequency }),
    ...(form.last_file_suffix   && { last_file_suffix: form.last_file_suffix }),
    // Conditional: email
    ...(form.deliveryLocation === 'email' && {
      recipients: form.recipients,
      subject: form.subject,
      body: form.body,
    }),
    // Conditional: non-email
    ...(form.deliveryLocation !== 'email' && {
      bucket: form.bucket,
      credentialsFile: form.credentialsFile,
      upload_option: form.upload_option,
    }),
    // Conditional: combineFiles
    ...(form.combineFiles && {
      maximumFileSize: Number(form.maximumFileSize),
      compression: form.compression,
    }),
  };

  // Forward ?error=true from the page URL to the POST URL so the API returns a 500.
  // The server matches the exact URL string "/api/three-v-deliveries?error=true".
  const errorSuffix = searchParams.get('error') === 'true' ? '?error=true' : '';
  const res = await fetch(`/api/three-v-deliveries${errorSuffix}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  setSubmitStatus(res.ok ? 'success' : 'error');
  if (res.ok) setForm(INITIAL_FORM);   // reset clears all fields + collapses conditional sections
  setIsSubmitting(false);
};
```

---

## 9. Success / Error Alerts

Rendered **above the form** when `submitStatus !== 'idle'`. Both are dismissible via
`oncloseEventOutput`. Define an `AlertEventProps` object and spread it (same pattern as the
other custom events — inline would cause a TS error).

| State | `color` | `role` | `icon` | Label |
|---|---|---|---|---|
| `success` | `AlertColor.INFO` | `AlertRole.STATUS` | `circle-check` | "Delivery configuration created successfully." |
| `error` | `AlertColor.DANGER` | `AlertRole.ALERT` | `triangle-exclamation` | "An error occurred. Please try again." |

> There is no `SUCCESS` color in the Lift palette (only `INFO`, `DANGER`, `WARNING`), so `INFO`
> is used for positive confirmation.

Both use `appearance={AlertAppearance.PAGE}`.

---

## 10. Submit Button

```tsx
<div className="form-actions">
  <atp-button label="Create" type="submit" isLoading={isSubmitting} />
</div>
```

`isLoading` is a confirmed prop on `atp-button` (shows spinner, prevents double-submit).

---

## 11. Styles (`styles.css`)

Append to the existing file:

```css
.form-field {
  max-width: 400px;
  display: block;
  margin-bottom: var(--atp-space-m);
}

.conditional-fields {
  padding-left: var(--atp-space-l);
  margin-bottom: var(--atp-space-m);
  display: flex;
  flex-direction: column;
  gap: var(--atp-space-s);
}

.form-checkboxes {
  display: flex;
  flex-direction: column;
  gap: var(--atp-space-s);
  margin-top: var(--atp-space-m);
}

.form-actions {
  margin-top: var(--atp-space-l);
}
```

---

## 12. Key Gotchas

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

## 13. Verification Steps

1. `npm run dev:tech-assessment-react-mode`
2. Navigate to `http://localhost:4200/delivery-configurations/create`
3. DevTools console — confirm GET fires on load and logs array sorted oldest → newest by `acceptedAt`
4. Fill form with `deliveryLocation = email`, `combineFiles = true`, submit — confirm 201 success alert; form resets
5. Navigate to `http://localhost:4200/delivery-configurations/create?error=true`, fill and submit — confirm error alert appears
6. `npx nx build tech-assessment-react` — confirm zero TypeScript/build errors

---

## 14. Interview Preparation: Why Each Decision Was Made

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

### Sort logic
```ts
(a, b) => new Date(a.acceptedAt).getTime() - new Date(b.acceptedAt).getTime()
```
`getTime()` returns milliseconds since epoch. Negative result → `a` is older → stays first.
Positive result → `b` is older → they swap. Net effect: ascending order (oldest first).

---

## 15. Verified Component API Reference

Confirmed by reading `vendor/atp-web/package/lib/` type definitions and bundled `index.js`:

| Component | Props used | Verified |
|---|---|---|
| `atp-alert` | `label`, `icon`, `color`, `appearance`, `role` | ✓ |
| `atp-button` | `label`, `type="submit"`, `isLoading` | ✓ |
| `atp-checkbox` | `label`, `checked`, `disabled` | ✓ |
| `atp-dropdown` | `itemsList`, `activeIds`, `selectionMode`, `showCheckmarks` | ✓ |
| `atp-input-field` | `required`, `textarea`, `class` (not `className`) | ✓ |

**Note on `itemSelectedOutput` detail shape:** typed as `string[]` (the updated `activeIds`
array), consistent with the `activeIds: string[]` prop contract and standard Lit output
patterns. If at runtime the detail is instead `MenuListItem[]` (full item objects), change the
handler to read `e.detail[0].id` instead of `e.detail[0]`.
