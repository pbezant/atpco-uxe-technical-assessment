## AI Docs (Lift - atp-web)

- Use the installed docs package for source MDX and stories about using the Lift design system library (atp-web):
  - node_modules/@atpco/atp-web-docs/index.md
  - node_modules/@atpco/atp-web-docs/index.json
  - node_modules/@atpco/atp-web-docs/docs/

## React + Lift web components: handle custom events natively (React 19)

Lift (`@atpco/atp-web`) elements are web components. In React 19 you do **not**
need `useRef` + `addEventListener` (the pre-19 escape hatch) to wire up their
custom events — and you should not. Use props directly:

- **Data props** (objects, arrays, booleans, strings): pass them as normal JSX
  props. React 19 assigns them as DOM *properties* on the element (it does not
  stringify them to attributes). Example: `items={items}`, `activeId={id}`,
  `outputNavigationEvents`.
- **Custom events**: pass a handler prop named `on` + the event's **exact,
  case-sensitive name**. React 19 registers it via `addEventListener`.
  - The sidebar emits `navigationEventOutput`, so the prop is
    **`onnavigationEventOutput`** — NOT `onNavigationEventOutput` and NOT
    `onnavigationeventoutput`. Only the exact event casing after a lowercase
    `on` works.

```tsx
<atp-sidebar
  items={SIDEBAR_ITEMS}
  activeId={activeId}
  outputNavigationEvents
  onnavigationEventOutput={(e: CustomEvent<{ id?: string }>) =>
    e.detail?.id && setActiveId(e.detail.id)
  }
/>
```

**Do not** "correct" the lowercase event-name casing — it will silently stop
firing. **Do not** reach for `document.getElementById` / refs / `useEffect` to
set properties or attach listeners unless an element has no equivalent prop.

**Typing note:** `@atpco/atp-web/react` augments JSX with each element's
*properties/attributes* but not its custom-event handlers, so `on<event>` props
aren't in the generated types. Type the handler locally and spread it in:

```tsx
type SidebarEvents = { onnavigationEventOutput?: (e: CustomEvent<{ id?: string }>) => void };
const events: SidebarEvents = { onnavigationEventOutput: handleNav };
<atp-sidebar items={items} activeId={id} outputNavigationEvents {...events} />
```
