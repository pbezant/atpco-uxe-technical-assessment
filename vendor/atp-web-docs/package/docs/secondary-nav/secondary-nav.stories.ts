import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import {html} from 'lit';
import './secondary-nav';

const meta: Meta = {
  component: 'atp-secondary-nav',
  title: 'Components/SecondaryNav',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'Secondary Nav',
    },
    actions: {
      handles: ['navigationEventOutput', 'menuItemSelectedOutput'],
    },
  },
  decorators: [withActions],
  argTypes: {
    itemsList: {},
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    itemsList: [
      {
        name: 'Item 1',
        id: 'item-1',
        route: 'item-1',
        badge: '99',
        menuItems: [
          {name: 'Item 1', description: 'Item 1 description', id: 'item-1'},
          {name: 'Item 2', description: 'Item 2 description', id: 'item-2'},
          {name: 'Item 3', description: 'Item 3 description', id: 'item-3'},
          {name: 'Item 4', description: 'Item 4 description', id: 'item-4'},
          {name: 'Item 5', description: 'Item 5 description', id: 'item-5'},
        ],
      },
      {name: 'Item 2', id: 'item-2', route: 'item-2', badge: '25'},
      {
        name: 'Item 3',
        id: 'item-3',
        route: 'item-3',
        badge: '12',
        menuItems: [
          {name: 'Item 1', description: 'Item 1 description', id: 'item-1'},
          {name: 'Item 2', description: 'Item 2 description', id: 'item-2'},
          {name: 'Item 3', description: 'Item 3 description', id: 'item-3'},
          {name: 'Item 4', description: 'Item 4 description', id: 'item-4'},
          {name: 'Item 5', description: 'Item 5 description', id: 'item-5'},
        ],
      },
      {name: 'divider1', isDivider: true},
      {
        name: 'Item 4',
        id: 'item-4',
        route: 'item-4',
        menuItems: [
          {name: 'Item 1', description: 'Item 1 description', id: 'item-1'},
          {name: 'Item 2', description: 'Item 2 description', id: 'item-2'},
          {name: 'Item 3', description: 'Item 3 description', id: 'item-3'},
          {name: 'Item 4', description: 'Item 4 description', id: 'item-4'},
          {name: 'Item 5', description: 'Item 5 description', id: 'item-5'},
        ],
      },
      {name: 'Item 5', id: 'item-5', route: 'item-5'},
    ],
    activeId: 'item-2',
  },
  render: ({itemsList, activeId}) => html`
    <div style="max-inline-size: 400px;">
      <atp-secondary-nav
        .itemsList="${itemsList}"
        activeId="${activeId}"
        ariaLabel="My secondary nav"
      ></atp-secondary-nav>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        code: `
        <script>
          const myItems = [
            {
              name: 'Item 1',
              id: 'item-1',
              route: 'url-item-1',
              badge: '12',
              menuItems: [
                {name: 'Item 1', description: 'Item 1 description', id: 'item-1'},
                {name: 'Item 2', description: 'Item 2 description', id: 'item-2'},
                {name: 'Item 3', description: 'Item 3 description', id: 'item-3'},
                {name: 'Item 4', description: 'Item 4 description', id: 'item-4'},
                {name: 'Item 5', description: 'Item 5 description', id: 'item-5'},
              ],
            },
          ];
        </script>
        
        <atp-secondary-nav  
          .itemsList=\${itemsList}
          ariaLabel="My secondary nav"
        ></atp-secondary-nav>`,
      },
    },
  },
};
