import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import './alert';
import '../icon/icon';
import '../button/button';
import {html} from 'lit';
import {AlertAppearance, AlertColor, AlertRole} from './alert';
import {TextButtonColor} from './alert-button/alert-button';

const meta: Meta = {
  component: 'atp-alert',
  title: 'Components/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'Alert Element',
    },
    actions: {
      handles: ['closeEventOutput'],
    },
  },
  decorators: [withActions],

  argTypes: {
    appearance: {
      table: {disable: true},
      options: [
        AlertAppearance.FULL,
        AlertAppearance.PAGE,
        AlertAppearance.EXPANDABLE,
        AlertAppearance.PAGE_SMALL,
        AlertAppearance.TOAST,
      ],
      control: {type: 'inline-radio'},
    },
    label: {},
    color: {
      options: [AlertColor.INFO, AlertColor.DANGER, AlertColor.WARNING],
      control: {type: 'inline-radio'},
    },
    role: {
      options: [AlertRole.NONE, AlertRole.ALERT, AlertRole.STATUS],
      control: {type: 'inline-radio'},
    },
    hideClose: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    icon: 'help',
    label: 'Test Alert',
    appearance: AlertAppearance.PAGE,
    color: AlertColor.INFO,
    role: AlertRole.NONE,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) => html`
    <atp-alert
      .icon=${icon}
      .label=${label}
      .appearance=${appearance}
      .color=${color}
      .role=${role}
      .hideClose=${hideClose}
    >
      <atp-alert-button appearance="text" label="Learn more" slot="button"></atp-alert-button>
    </atp-alert>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert
        icon="icon"
        label="label"
        appearance="appearance"
        color="color"
        role="role"
      >
        <atp-alert-button appearance="text" label="Learn more" slot="button"></atp-alert-button>
      </atp-alert>`,
      },
    },
  },
};

export const TopLevelBanner: Story = {
  args: {
    icon: '',
    label: 'Your profile will be reviewed within 24 hours.',
    appearance: AlertAppearance.FULL,
    color: AlertColor.INFO,
    role: AlertRole.NONE,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) => html`
    <atp-alert
      .icon=${icon}
      .label=${label}
      .appearance=${appearance}
      .color=${color}
      .role=${role}
      .hideClose=${hideClose}
    >
      <atp-alert-button
        .iconConfig="${{icon: 'chevron-right', height: 12}}"
        appearance="text"
        size="small"
        .textButtonColor=${TextButtonColor.LIGHT}
        label="Learn more"
        slot="button"
      ></atp-alert-button>
    </atp-alert>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert .icon=\${icon} .label=\${label} .appearance=\${appearance} .color=\${color} .role=\${role}>
        <atp-alert-button
          .iconConfig="\${{icon: 'chevron-right', height: 12}}"
          appearance="text"
          size="small"
          .textButtonColor=\${TextButtonColor.LIGHT}
          label="Learn more"
          slot="button"
        ></atp-alert-button>
      </atp-alert>`,
      },
    },
  },
};

export const PageLevelBanner: Story = {
  args: {
    icon: 'circle-info',
    label: 'Your profile will be reviewed within 24 hours.',
    appearance: AlertAppearance.PAGE,
    color: AlertColor.INFO,
    role: AlertRole.NONE,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) => html`
    <atp-alert
      .icon=${icon}
      .label=${label}
      .appearance=${appearance}
      .color=${color}
      .role=${role}
      .hideClose=${hideClose}
    >
      <atp-alert-button
        .textButtonColor=${TextButtonColor.DARK}
        appearance="text"
        label="Learn more"
        slot="button"
      ></atp-alert-button>
    </atp-alert>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert .icon=\${icon} .label=\${label} .appearance=\${appearance} .color=\${color} .role=\${role}>
        <atp-alert-button
          .textButtonColor=\${TextButtonColor.DARK}
          appearance="text"
          label="Learn more"
          slot="button"
        ></atp-alert-button>
      </atp-alert>`,
      },
    },
  },
};

export const PageLevelSmallBanner: Story = {
  args: {
    icon: 'circle-info',
    label: 'Small page alert',
    appearance: AlertAppearance.PAGE_SMALL,
    color: AlertColor.INFO,
    role: AlertRole.NONE,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) =>
    html`<atp-alert
      .icon=${icon}
      .label=${label}
      .appearance=${appearance}
      .color=${color}
      .role=${role}
      .hideClose=${hideClose}
    >
    </atp-alert>`,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert
        icon="circle-info"
        label="Small page alert"
        appearance="page-small"
        color="info"
        role="role"
      ></atp-alert>`,
      },
    },
  },
};

export const ExpandablePageLevelBanner: Story = {
  args: {
    label: 'Your profile will be reviewed within 24 hours.',
    appearance: AlertAppearance.EXPANDABLE,
    color: AlertColor.INFO,
    role: AlertRole.NONE,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) =>
    html`
      <style>
        .slot-content {
          color: var(--atp-button-primary-medium-enabled);
          font-family: var(--atpco-font-family);
          font-size: var(--atp-font-size-body-s);
          font-weight: var(--atp-font-weight-regular);
          line-height: var(--atp-line-height-body-s);
          padding-inline-start: calc(var(--atp-space-l) + 3px);
          li {
            margin-block-end: var(--atp-space-xs);
          }
        }
      </style>
      <atp-alert
        .icon=${icon}
        .label=${label}
        .appearance=${appearance}
        .color=${color}
        .role=${role}
        .hideClose=${hideClose}
      >
        <ul class="slot-content" slot="content">
          ${Array(10)
            .fill(0)
            .map((e, i) => html`<li>Projected content - item ${i}</li>`)}
        </ul>
      </atp-alert>
    `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert
        icon="icon"
        label="label"
        appearance="appearance"
        color="color"
        role="role"
      >
        <div slot="content"> <!-- Projected content --></div>
      </atp-alert>`,
      },
    },
  },
};

export const Toast: Story = {
  args: {
    icon: 'circle-check',
    label: 'Your selection has been saved.',
    appearance: AlertAppearance.TOAST,
    color: AlertColor.INFO,
    role: AlertRole.STATUS,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) => html`
    <p>
      Use the "toast" variant for a dynamic alert that pops up from the bottom of the screen over
      the regular page content, providing a status update. (Note that the Lift component does not
      provide the position or the "popping up" behavior; your application must provide this.)
    </p>
    <p>
      If the Toast is not persistent, it must remain on screen for at least 5 seconds before
      dismissing itself. There must also be no negative impact on the user's activity if they fail
      to notice the Toast before it disappears. Therefore, critical messages must be persistent.
    </p>
    <p>
      All toasts must have a <code>role</code> property of either <code>alert</code> or
      <code>status</code> as appropriate; see the "Role" section.
    </p>

    <div style="margin-block-start: var(--atp-space-m)">
      <atp-alert
        style="max-width: 500px; display: block"
        .icon=${icon}
        .label=${label}
        .appearance=${appearance}
        .color=${color}
        .role=${role}
        .hideClose=${hideClose}
      >
        <atp-alert-button
          size="medium"
          label="Learn more"
          slot="button"
          focusInverse="true"
        ></atp-alert-button>
      </atp-alert>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert
        style="max-width: 500px; display: block"
        icon="icon"
        label="label"
        appearance="appearance"
        color="color"
        role="role"
      >
        <atp-alert-button size="medium" label="Learn more" focusInverse="true" slot="button"></atp-alert-button>
        </atp-alert>`,
      },
    },
  },
};

export const Role: Story = {
  args: {
    icon: 'circle-check',
    label: 'Everything is catching on fire',
    appearance: AlertAppearance.TOAST,
    color: AlertColor.DANGER,
    role: AlertRole.ALERT,
    hideClose: false,
  },
  render: ({icon, label, appearance, color, role, hideClose}) => html`
    <p>
      Use the <code>role</code> property to set the HTML <code>role</code> property on a dynamic
      Alert.
    </p>
    <ul>
      <li>
        Use a <code>role</code> for dynamic alerts that appear after page load. An approprite
        <code>role</code> attribute will inform an assistive technology that it needs to announce
        the content update.
      </li>
      <li>Do not use a <code>role</code> on an Alert if it is already present at page load.</li>
      <li>
        Use a <code>role</code> of <code>"alert"</code> for dynamic alerts that are urgent, require
        immediate attention, and should interrupt user action. This is true for most error messages,
        but not most other Alerts.
      </li>
      <li>
        Use a <code>role</code> of <code>"status"</code> for dynamic alerts that are not urgent and
        should not interrupt user activity.
      </li>
    </ul>

    <div style="margin-block-start: var(--atp-space-m)">
      <atp-alert
        style="max-width: 500px; display: block"
        .icon=${icon}
        .label=${label}
        .appearance=${appearance}
        .color=${color}
        .role=${role}
        .hideClose=${hideClose}
      >
      </atp-alert>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-alert
        style="max-width: 500px; display: block"
        icon="icon"
        label="label"
        appearance="appearance"
        color="color"
        role="role"
      >
        <atp-alert-button size="medium" label="Learn more" focusInverse="true" slot="button"></atp-alert-button>
        </atp-alert>`,
      },
    },
  },
};
