import { useState } from 'react';
import type { BreadcrumbItem, SidebarItem } from '@atpco/atp-web';

const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Collections', id: 'collections', route: 'collections', children: [] },
  {
    name: 'Manage',
    id: 'manage',
    route: 'manage',
    children: [
      { name: 'Input configurations', id: 'input-configurations', route: 'input-configurations' },
      {
        name: 'Output configurations',
        id: 'output-configurations',
        route: 'output-configurations',
      },
      {
        name: 'Packaging configurations',
        id: 'packaging-configurations',
        route: 'packaging-configurations',
      },
      {
        name: 'Delivery configurations',
        id: 'delivery-configurations',
        route: 'delivery-configurations',
      },
    ],
  },
];

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Manage', href: '/manage' },
  { name: 'Delivery configurations', href: '/delivery-configurations' },
];

// React 19 registers a prop named `on<EventName>` — using the event's EXACT
// casing after the lowercase `on` — as an addEventListener on a custom element.
// The sidebar emits `navigationEventOutput`, so the handler prop must be spelled
// `onnavigationEventOutput` (not `onNavigationEventOutput`). The shipped JSX
// types only describe properties/attributes, so we type the event prop here.
type SidebarEventProps = {
  onnavigationEventOutput?: (event: CustomEvent<{ id?: string }>) => void;
};

export default function DeliveryConfigurationCreateRoute() {
  const [activeSidebarId, setActiveSidebarId] = useState('delivery-configurations');

  const sidebarEventProps: SidebarEventProps = {
    onnavigationEventOutput: (event) => {
      const id = event.detail?.id;
      if (id) {
        setActiveSidebarId(id);
      }
    },
  };

  return (
    <div className="atp-layout">
      <atp-header
        id="delivery-config-header"
        className="layout-header"
        label="PriceEye"
        org="ATPCO"
      ></atp-header>
      <div className="layout-sidebar">
        <atp-sidebar
          id="delivery-config-sidebar"
          items={SIDEBAR_ITEMS}
          activeId={activeSidebarId}
          outputNavigationEvents
          {...sidebarEventProps}
        ></atp-sidebar>
      </div>
      <div className="scroll-wrapper">
        <div className="page-content">
          <atp-breadcrumbs
            id="delivery-config-breadcrumbs"
            itemsList={BREADCRUMB_ITEMS}
          ></atp-breadcrumbs>
          <h1 className="view-title">Create delivery configuration</h1>
        </div>
      </div>
    </div>
  );
}
