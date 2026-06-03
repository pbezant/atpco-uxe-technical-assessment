import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import {html} from 'lit';

import './button';
import '../icon/icon';
import {ButtonAppearance, ButtonSize, IconPosition} from './button';

const meta: Meta = {
  component: 'atp-button',
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'Button Element',
    },
    actions: {
      handles: ['clickEventOutput', 'focusEventOutput', 'blurEventOutput'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {},
    type: {
      options: ['button', 'submit', 'reset'],
      control: {type: 'inline-radio'},
    },
    name: {},
    value: {},
    appearance: {
      options: [ButtonAppearance.FILL, ButtonAppearance.OUTLINE, ButtonAppearance.TEXT],
      control: {type: 'inline-radio'},
    },
    size: {
      options: [ButtonSize.LARGE, ButtonSize.MEDIUM, ButtonSize.SMALL],
      control: {type: 'inline-radio'},
    },
    disabled: {
      options: [true, false],
    },
    isDestructive: {
      options: [true, false],
    },
    isLoading: {
      options: [true, false],
    },
    iconConfig: {},
    secondaryIconConfig: {},
    iconPosition: {
      options: [IconPosition.LEFT, IconPosition.RIGHT],
      control: {type: 'inline-radio'},
    },
    focusInverse: {
      options: [true, false],
    },
    dataTrackingId: {},
    fullWidth: {
      options: [true, false],
    },
    hasTextBlockPadding: {
      options: [true, false],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    isDestructive: false,
    isLoading: false,
    focusInverse: false,
    dataTrackingId: undefined,
    fullWidth: false,
    hasTextBlockPadding: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<atp-button label="Hello World" appearance="fill" size="large" color="primary"></atp-button>',
      },
    },
  },
};

export const Icon: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    iconPosition: IconPosition.RIGHT,
    isLoading: false,
    iconConfig: {
      icon: 'chevron-down',
      height: 16,
    },
    secondaryIconConfig: {
      icon: 'add',
      height: 16,
    },

    focusInverse: false,
    dataTrackingId: undefined,
    hasTextBlockPadding: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<atp-button label="Hello World" appearance="fill" size="ButtonSize.LARGE"></atp-button>',
      },
    },
  },
};

export const IconClickable: Story = {
  args: {
    appearance: ButtonAppearance.TEXT,
    size: ButtonSize.LARGE,
    iconConfig: {
      icon: 'add',
      height: 16,
      label: 'Button label',
    },
    iconClickableLight: false,
    hasTextBlockPadding: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<atp-button .iconConfig="{icon: 'add', height: 16, label: 'Button label'}" appearance="ButtonAppearance.TEXT"></atp-button>`,
      },
    },
  },
  render: (args) => html` <div
    style="display: flex; justify-content: center; align-items:center; inline-size: 60px; block-size: 60px;  gap: var(--atp-space-xs); background-color:${args[
      'iconClickableLight'
    ]
      ? 'black'
      : 'white'}"
  >
    <atp-button
      .iconConfig="${args['iconConfig']}"
      .appearance="${args['appearance']}"
      .iconClickableLight="${args['iconClickableLight']}"
      .hasTextBlockPadding="${args['hasTextBlockPadding']}"
    ></atp-button>
  </div>`,
};

export const FullWidth: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    isDestructive: false,
    isLoading: false,
    focusInverse: false,
    dataTrackingId: undefined,
    fullWidth: true,
    hasTextBlockPadding: false,
  },
  render: (args) => html`
    <p>
      Use the "full width" option to make the Button block-level, and to make it fill all available
      width.
    </p>
    <p style="margin-block-end: var(--atp-space-m)">
      This is useful in responsive design, where the Button's container should constrain the width
      instead.
    </p>

    <div class="atp-display-flex atp-flex-direction-column atp-gap-m">
      <atp-button
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${args['size']}
        .disabled=${args['disabled']}
        .isDestructive=${args['isDestructive']}
        .isLoading=${args['isLoading']}
        .focusInverse=${args['focusInverse']}
        .dataTrackingId=${args['dataTrackingId']}
        .fullWidth=${args['fullWidth']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>

      <atp-button
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${ButtonSize.LARGE}
        .disabled=${args['disabled']}
        .isDestructive=${args['isDestructive']}
        .isLoading=${args['isLoading']}
        .focusInverse=${args['focusInverse']}
        .dataTrackingId=${args['dataTrackingId']}
        .fullWidth=${args['fullWidth']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>

      <atp-button
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${ButtonSize.MEDIUM}
        .disabled=${args['disabled']}
        .isDestructive=${args['isDestructive']}
        .isLoading=${args['isLoading']}
        .focusInverse=${args['focusInverse']}
        .dataTrackingId=${args['dataTrackingId']}
        .fullWidth=${args['fullWidth']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>

      <atp-button
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${ButtonSize.SMALL}
        .disabled=${args['disabled']}
        .isDestructive=${args['isDestructive']}
        .isLoading=${args['isLoading']}
        .focusInverse=${args['focusInverse']}
        .dataTrackingId=${args['dataTrackingId']}
        .fullWidth=${args['fullWidth']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>
    </div>
  `,

  parameters: {
    docs: {
      source: {
        code: '<atp-button label="Hello World" appearance="fill" size="large" color="primary" fullwidth"></atp-button>',
      },
    },
  },
};

export const Slot: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    isDestructive: false,
    isLoading: false,
    focusInverse: false,
    dataTrackingId: undefined,
    fullWidth: false,
    hasTextBlockPadding: false,
  },
  render: (args) => html`
    <atp-button
      .label=${args['label']}
      .appearance=${args['appearance']}
      .size=${args['size']}
      .isDestructive=${args['isDestructive']}
      .isLoading=${args['isLoading']}
      .hasTextBlockPadding=${args['hasTextBlockPadding']}
      color="primary"
      ><span>
        with slot
        <em>contents</em>
        <span class="visually-hidden">including visually hidden text</span>
      </span></atp-button
    >
  `,
  parameters: {
    docs: {
      source: {
        code: `
          <atp-button label="Hello World" appearance="fill" size="large" color="primary">
            <span>
              with slot
              <em>contents</em>
              <span class="visually-hidden">including visually hidden text</span>
            </span>
          </atp-button>
        `,
      },
    },
  },
};

export const FocusInverse: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    focusInverse: true,
    dataTrackingId: undefined,
    fullWidth: false,
    hasTextBlockPadding: false,
  },
  render: (args) => html`
    <div
      style="background: var(--atp-slate-1000); padding: var(--atp-space-l); color: var(--atp-neutral-100)"
    >
      <p>
        When using the keyboard to move focus to this Button, its focus indicator will be inverted,
        so that it is white instead of blue.
      </p>
      <p>Use this feature when a Button is on a dark background.</p>
      <p>
        <atp-button
          .label=${args['label']}
          .appearance=${args['appearance']}
          .size=${args['size']}
          .disabled=${args['disabled']}
          .focusInverse=${args['focusInverse']}
          .hasTextBlockPadding=${args['hasTextBlockPadding']}
        ></atp-button>
      </p>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: '<atp-button label="Hello World" appearance="fill" size="large" color="primary" focusInverse="true"></atp-button>',
      },
    },
  },
};

export const InForm: Story = {
  args: {
    label: 'Sign in',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.MEDIUM,
    hasTextBlockPadding: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Set \`type="submit"\` to make the button submit its owning form natively. Add \`name\` and \`value\` to contribute a parameter to the form data — equivalent to a native \`<button name="login" value="Login">\`. \`type="reset"\` resets the form. Default is \`type="button"\` (no implicit form action).

**Caveat:** implicit submission via Enter key inside a sibling input is not yet handled — see the form-associated custom element implicit-submission limitation. Use \`type="submit"\` on click and wire \`form.requestSubmit()\` on Enter in callers that need it.`,
      },
      source: {
        code: '<atp-button type="submit" name="login" value="Login" label="Sign in"></atp-button>',
      },
    },
  },
  render: (args) => html`
    <form
      style="display: flex; flex-direction: column; gap: var(--atp-space-s); max-width: 320px;"
      @submit=${(e: SubmitEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        alert('Submitted: ' + JSON.stringify(Object.fromEntries(data.entries())));
      }}
    >
      <label
        >User ID
        <input name="j_username" required style="display: block; width: 100%;" />
      </label>
      <label
        >Password
        <input name="j_password" type="password" required style="display: block; width: 100%;" />
      </label>

      <atp-button
        type="submit"
        name="login"
        value="Login"
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${args['size']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>

      <atp-button type="reset" label="Reset" appearance=${ButtonAppearance.OUTLINE}></atp-button>
    </form>
  `,
};

export const DataTrackingId: Story = {
  args: {
    label: 'Hello World',
    appearance: ButtonAppearance.FILL,
    size: ButtonSize.LARGE,
    disabled: false,
    dataTrackingId: 'myTrackingId',
    fullWidth: false,
    hasTextBlockPadding: false,
  },
  render: (args) => html`
    <p>
      This Button has a <code>dataTrackingId</code> prop on it, so the underlying
      <code>&lt;button&gt;</code> tag will have a <code>data-tracking-id</code> prop with a matching
      value.
    </p>
    <p>
      <atp-button
        .label=${args['label']}
        .appearance=${args['appearance']}
        .size=${args['size']}
        .disabled=${args['disabled']}
        .dataTrackingId=${args['dataTrackingId']}
        .hasTextBlockPadding=${args['hasTextBlockPadding']}
      ></atp-button>
    </p>
  `,
  parameters: {
    docs: {
      source: {
        code: '<atp-button label="Hello World" appearance="fill" size="large" color="primary" dataTrackingId="myTrackingId"></atp-button>',
      },
    },
  },
};
