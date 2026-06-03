import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import {html} from 'lit';
import {ButtonAppearance, ButtonSize, IconPosition} from '../button/button';

import './button-split';
import '../button/button';
import '../icon/icon';
import '../dropdown/dropdown';

const meta: Meta = {
  component: 'atp-button-split',
  title: 'Components/ButtonSplit',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'ButtonSplit Element',
    },
    actions: {
      handles: [
        'buttonClickEventOutput',
        'buttonChangeEventOutput',
        'buttonFocusEventOutput',
        'buttonBlurEventOutput',
        'menuClickEventOutput',
        'menuFocusEventOutput',
        'menuBlurEventOutput',
        'dropdownClosedOutput',
        'itemSelectedOutput',
      ],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {},
    menuLabel: {},
    appearance: {
      options: [ButtonAppearance.FILL, ButtonAppearance.OUTLINE],
      control: {type: 'inline-radio'},
    },
    size: {
      options: [ButtonSize.LARGE, ButtonSize.MEDIUM, ButtonSize.SMALL],
      control: {type: 'inline-radio'},
    },
    disabled: {
      options: [true, false],
    },
    iconConfig: {},
    iconPosition: {
      options: [IconPosition.LEFT, IconPosition.RIGHT],
      control: {type: 'inline-radio'},
    },
    favorite: {
      options: [true, false],
    },
    checked: {
      options: [true, false],
    },
    dataTrackingId: {},
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Hello World',
    menuLabel: 'Show menu',
    appearance: ButtonAppearance.OUTLINE,
    size: ButtonSize.MEDIUM,
    iconConfig: null,
    iconPosition: IconPosition.RIGHT,
    disabled: false,
    favorite: false,
    checked: false,
    dataTrackingId: undefined,
    itemsList: [
      {name: 'Option 1', id: 'item-1'},
      {name: 'Option 2', id: 'item-2'},
      {name: 'Option 3', id: 'item-3'},
    ],
    activeIds: ['item-1'],
  },
  render: (args) => html`
    <div class="wrapper">
      <atp-button-split
        id="button"
        .label=${args['label']}
        .menuLabel=${args['menuLabel']}
        .appearance=${args['appearance']}
        .size=${args['size']}
        .iconConfig=${args['iconConfig']}
        .iconPosition=${args['iconPosition']}
        .disabled=${args['disabled']}
        .favorite=${args['favorite']}
        .checked=${args['checked']}
        .dataTrackingId=${args['dataTrackingId']}
      ></atp-button-split>
      <atp-dropdown
        id="dropdown"
        style="width: 150px;"
        .itemsList=${args['itemsList']}
        .activeIds=${args['activeIds']}
      ></atp-dropdown>
    </div>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;

      button?.addEventListener('menuClickEventOutput', () => {
        handleClick(!showToggle);
      });

      dropdown?.addEventListener('itemSelectedOutput', ({detail}) => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      dropdown?.addEventListener('dropdownClosedOutput', () => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      function handleClick(status) {
        showToggle = status;
        if (showToggle) {
          dropdown.startKeyScrolling();
        } else {
          dropdown.disableKeyScrolling();
        }
      }
    </script>
  `,
  parameters: {
    docs: {
      source: {
        code: `
        <atp-button-split label="Hello World" menuLabel="Show more options" appearance="fill">
        </atp-button-split>
        <atp-dropdown itemsList="MyItemsList"></atp-dropdown>
        `,
      },
    },
  },
};

export const Favorite: Story = {
  args: {
    label: 'Favorite this',
    menuLabel: 'Edit this favorite',
    size: ButtonSize.MEDIUM,
    appearance: ButtonAppearance.OUTLINE,
    disabled: false,
    favorite: true,
    checked: false,
    dataTrackingId: undefined,
    itemsList: [
      {name: 'Option 1', id: 'item-1'},
      {name: 'Option 2', id: 'item-2'},
      {name: 'Option 3', id: 'item-3'},
    ],
    activeIds: ['item-1'],
  },
  render: (args) => html`
    <p style="margin-block-end: var(--atp-space-s)">
      The "favorite" version replaces the lefthand button with a checkbox that has a specific
      "favorites" look.
      <br />
      The state of this checkbox can be set (and retrieved) with the
      <code>checked</code> property.
    </p>

    <div class="wrapper">
      <div class="wrapper">
        <atp-button-split
          id="button"
          .label=${args['size']}
          .menuLabel=${args['menuLabel']}
          .size=${args['size']}
          .appearance=${args['appearance']}
          .disabled=${args['disabled']}
          .favorite=${args['favorite']}
          .checked=${args['checked']}
          .dataTrackingId=${args['dataTrackingId']}
        ></atp-button-split>
        <atp-dropdown
          id="dropdown"
          style="width: 150px;"
          .itemsList=${args['itemsList']}
          .activeIds=${args['activeIds']}
        ></atp-dropdown>
      </div>
    </div>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;

      button?.addEventListener('menuClickEventOutput', () => {
        handleClick(!showToggle);
      });

      dropdown?.addEventListener('itemSelectedOutput', ({detail}) => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      dropdown?.addEventListener('dropdownClosedOutput', () => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      function handleClick(status) {
        showToggle = status;
        if (showToggle) {
          dropdown.startKeyScrolling();
        } else {
          dropdown.disableKeyScrolling();
        }
      }
    </script>
  `,
  parameters: {
    docs: {
      source: {
        code: `
        <atp-button-split label="Add to favorites" menuLabel="Show more options" favorite="true" appearance="outline">
        </atp-button-split>
        <atp-dropdown itemsList="MyItemsList"></atp-dropdown>
        `,
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    menuLabel: 'Show menu',
    disabled: false,
    favorite: false,
    iconConfig: null,
    iconPosition: IconPosition.RIGHT,
    dataTrackingId: undefined,
    itemsList: [
      {name: 'Option 1', id: 'item-1'},
      {name: 'Option 2', id: 'item-2'},
      {name: 'Option 3', id: 'item-3'},
    ],
    activeIds: ['item-1'],
  },
  render: (args) => html`
    <div class="atp-display-flex atp-flex-direction-column atp-gap-m">
      <div class="atp-display-flex atp-gap-s">
        <atp-button-split
          label="large"
          .menuLabel=${args['menuLabel']}
          size="large"
          .disabled=${args['disabled']}
          .iconConfig=${args['iconConfig']}
          .iconPosition=${args['iconPosition']}
          .favorite=${args['favorite']}
        ></atp-button-split>
      </div>

      <div class="atp-display-flex atp-gap-s">
        <atp-button-split
          label="medium"
          .menuLabel=${args['menuLabel']}
          size="medium"
          .disabled=${args['disabled']}
          .iconConfig=${args['iconConfig']}
          .iconPosition=${args['iconPosition']}
          .favorite=${args['favorite']}
        ></atp-button-split>
      </div>

      <div class="atp-display-flex atp-gap-s">
        <atp-button-split
          label="small"
          .menuLabel=${args['menuLabel']}
          size="small"
          .disabled=${args['disabled']}
          .iconConfig=${args['iconConfig']}
          .iconPosition=${args['iconPosition']}
          .favorite=${args['favorite']}
        ></atp-button-split>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
        <atp-button-split label="Hello World" menuLabel="Show more options" appearance="fill" size="large">
        </atp-button-split>
        <atp-dropdown itemsList="MyItemsList"></atp-dropdown>
        `,
      },
    },
  },
};

export const Icon: Story = {
  args: {
    label: 'Hello World',
    menuLabel: 'Show menu',
    appearance: ButtonAppearance.OUTLINE,
    size: ButtonSize.MEDIUM,
    iconPosition: IconPosition.RIGHT,
    iconConfig: {
      icon: 'add',
      height: 16,
    },
    disabled: false,
    favorite: false,
    checked: false,
    dataTrackingId: undefined,
    itemsList: [
      {name: 'Option 1', id: 'item-1'},
      {name: 'Option 2', id: 'item-2'},
      {name: 'Option 3', id: 'item-3'},
    ],
    activeIds: ['item-1'],
  },
  render: (args) => html`
    <div class="wrapper">
      <atp-button-split
        id="button"
        .label=${args['label']}
        .menuLabel=${args['menuLabel']}
        .appearance=${args['appearance']}
        .size=${args['size']}
        .iconConfig=${args['iconConfig']}
        .iconPosition=${args['iconPosition']}
        .disabled=${args['disabled']}
        .favorite=${args['favorite']}
        .checked=${args['checked']}
        .dataTrackingId=${args['dataTrackingId']}
      ></atp-button-split>
      <atp-dropdown
        id="dropdown"
        style="width: 150px;"
        .itemsList=${args['itemsList']}
        .activeIds=${args['activeIds']}
      ></atp-dropdown>
    </div>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;

      button?.addEventListener('menuClickEventOutput', () => {
        handleClick(!showToggle);
      });

      dropdown?.addEventListener('itemSelectedOutput', ({detail}) => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      dropdown?.addEventListener('dropdownClosedOutput', () => {
        dropdown.disableKeyScrolling();
        showToggle = false;
      });

      function handleClick(status) {
        showToggle = status;
        if (showToggle) {
          dropdown.startKeyScrolling();
        } else {
          dropdown.disableKeyScrolling();
        }
      }
    </script>
  `,
  parameters: {
    docs: {
      source: {
        code: `
        <atp-button-split label="Hello World" menuLabel="Show more options" appearance="fill" iconConfig="MyIconConfig" iconPosition="right">
        </atp-button-split>
        <atp-dropdown itemsList="MyItemsList"></atp-dropdown>
        `,
      },
    },
  },
};
