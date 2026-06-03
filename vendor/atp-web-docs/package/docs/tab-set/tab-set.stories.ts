import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import {html} from 'lit';
import './tab-set';
import {TabAppearance} from './tab-set';
import {SegmentColor, SegmentSize} from '../shared/enums';

const meta: Meta = {
  component: 'atp-tab-set',
  title: 'Components/TabSet',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'TabSet',
    },
    actions: {
      handles: ['clickEventOutput'],
    },
  },
  decorators: [withActions],
  argTypes: {
    appearance: {
      control: 'select',
      options: Object.values(TabAppearance),
    },
    segmentSize: {
      control: 'select',
      options: Object.values(SegmentSize),
    },
    segmentColor: {
      control: 'select',
      options: Object.values(SegmentColor),
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    tabs: [
      {name: 'Item 0', id: 'item-0'},
      {name: 'Item 1', id: 'item-1', badge: '5'},
      {name: 'Item 2', id: 'item-2', badge: '3', disabled: true},
      {name: 'Item 3', id: 'item-3'},
      {name: 'Item 4', id: 'item-4', badge: '1'},
    ],
    isFullWidth: true,
    activeIndex: 0,
    ariaLabel: 'My Example Tabs',
    appearance: TabAppearance.DEFAULT,
    segmentSize: SegmentSize.LARGE,
    segmentColor: SegmentColor.DEFAULT,
  },
  render: (args) =>
    html`
      <atp-tab-set
        .tabs="${args['tabs']}"
        .isFullWidth=${args['isFullWidth']}
        .activeIndex=${args['activeIndex']}
        .ariaLabel=${args['ariaLabel']}
        .appearance=${args['appearance']}
        .segmentSize=${args['segmentSize']}
        .segmentColor=${args['segmentColor']}
      >
        <div slot="tabpanel0">panel 0 content</div>
        <div slot="tabpanel1">panel 1 content</div>
        <div slot="tabpanel2">panel 2 content</div>
        <div slot="tabpanel3">panel 3 content</div>
        <div slot="tabpanel4">panel 4 content</div>
      </atp-tab-set>
    `,
  parameters: {
    docs: {
      source: {
        code: `
        <script>
          myTabs = tabs: [
            {name: 'Item 0', id: 'item-0'},
            {name: 'Item 1', id: 'item-1', badge: '5'},
            {name: 'Item 2', id: 'item-2', badge: '3', disabled: true},
            {name: 'Item 3', id: 'item-3'},
            {name: 'Item 4', id: 'item-4', badge: '1'},
          ]
        </script>
          
        <atp-tab-set
          tabs="myTabs"
          isFullWidth="true"
          activeIndex="0"
          ariaLabel="My Example Tabs"
        >
          <div slot="tabpanel0">panel 0 content</div>
          <div slot="tabpanel1">panel 1 content</div>
          <div slot="tabpanel2">panel 2 content</div>
          <div slot="tabpanel3">panel 3 content</div>
          <div slot="tabpanel4">panel 4 content</div>
        </atp-tab-set>
        
        <!-- Usage example in an Angular context -->
        <atp-tab-set 
          [tabs]="myTabs"
          [isFullWidth]="true"
          [activeIndex]="0"
          [ariaLabel]="'My Example Tabs'"
          (clickEventOutput)="tabHandler($event)">
        </atp-tab-set>
        `,
      },
    },
  },
};

export const Segmented: Story = {
  args: {
    tabs: [
      {
        name: 'Item 0',
        id: 'item-0',
        menuItemsList: [
          {name: 'Item 0a', description: 'Item 0a description', id: 'item-0a'},
          {name: 'Item 0b', description: 'Item 0b description', id: 'item-0b'},
          {name: 'Item 0c', description: 'Item 0c description', id: 'item-0c'},
          {name: 'Item 0d', description: 'Item 0d description', id: 'item-0d'},
          {name: 'Item 0e', description: 'Item 0e description', id: 'item-0e'},
        ],
      },
      {
        name: 'Item 1',
        id: 'item-1',
        badge: '5',
        menuItemsList: [
          {name: 'Item 1a', description: 'Item 1a description', id: 'item-1a'},
          {name: 'Item 1b', description: 'Item 1b description', id: 'item-1b'},
          {name: 'Item 1c', description: 'Item 1c description', id: 'item-1c'},
          {name: 'Item 1d', description: 'Item 1d description', id: 'item-1d'},
          {name: 'Item 1e', description: 'Item 1e description', id: 'item-1e'},
        ],
      },
      {
        name: 'Item 2',
        id: 'item-2',
        badge: '3',
        disabled: true,
        menuItemsList: [
          {name: 'Item 2a', description: 'Item 2a description', id: 'item-2a'},
          {name: 'Item 2b', description: 'Item 2b description', id: 'item-2b'},
          {name: 'Item 2c', description: 'Item 2c description', id: 'item-2c'},
        ],
      },
      {
        name: 'Item 3',
        id: 'item-3',
        menuItemsList: [
          {name: 'Item 3a', description: 'Item 3a description', id: 'item-3a'},
          {name: 'Item 3b', description: 'Item 3b description', id: 'item-3b'},
          {name: 'Item 3c', description: 'Item 3c description', id: 'item-3c'},
          {name: 'Item 3d', description: 'Item 3d description', id: 'item-3d'},
          {name: 'Item 3e', description: 'Item 3e description', id: 'item-3e'},
        ],
      },
      {name: 'Item 4', id: 'item-4', badge: '1'},
    ],
    isFullWidth: true,
    activeIndex: 1,
    ariaLabel: 'My Example Tabs',
    appearance: TabAppearance.SEGMENTED,
    segmentSize: SegmentSize.LARGE,
    segmentColor: SegmentColor.DEFAULT,
  },
  render: (args) =>
    html`
      <atp-tab-set
        .tabs="${args['tabs']}"
        .isFullWidth=${args['isFullWidth']}
        .activeIndex=${args['activeIndex']}
        .ariaLabel=${args['ariaLabel']}
        .appearance=${args['appearance']}
        .segmentSize=${args['segmentSize']}
        .segmentColor=${args['segmentColor']}
      >
        <div slot="tabpanel0">panel 0 content</div>
        <div slot="tabpanel1">panel 1 content</div>
        <div slot="tabpanel2">panel 2 content</div>
        <div slot="tabpanel3">panel 3 content</div>
        <div slot="tabpanel4">panel 4 content</div>
      </atp-tab-set>
    `,
  parameters: {
    docs: {
      source: {
        code: `
        <script>
          myTabs = tabs: [
            {name: 'Item 0', id: 'item-0', 
            {name: 'Item 1', id: 'item-1', badge: '5'},
            {name: 'Item 2', id: 'item-2', badge: '3', disabled: true},
            {name: 'Item 3', id: 'item-3'},
            {name: 'Item 4', id: 'item-4', badge: '1'},
          ]
        </script>
          
        <atp-tab-set
          tabs="myTabs"
          isFullWidth="true"
          activeIndex="0"
          ariaLabel="My Example Tabs"
        >
          <div slot="tabpanel0">panel 0 content</div>
          <div slot="tabpanel1">panel 1 content</div>
          <div slot="tabpanel2">panel 2 content</div>
          <div slot="tabpanel3">panel 3 content</div>
          <div slot="tabpanel4">panel 4 content</div>
        </atp-tab-set>
        
        <!-- Usage example in an Angular context -->
        <atp-tab-set 
          [tabs]="myTabs"
          [isFullWidth]="true"
          [activeIndex]="0"
          [ariaLabel]="'My Example Tabs'"
          (clickEventOutput)="tabHandler($event)">
        </atp-tab-set>
        `,
      },
    },
  },
};

export const SegmentedIcon: Story = {
  args: {
    tabs: [
      {name: 'Grid view', id: 'grid-view', iconConfig: {icon: 'grid'}},
      {name: 'List view', id: 'list-view', iconConfig: {icon: 'list'}},
      {name: 'Table view', id: 'table-view', iconConfig: {icon: 'table-list'}},
    ],
    isFullWidth: false,
    activeIndex: 0,
    ariaLabel: 'View options',
    appearance: TabAppearance.SEGMENTED,
    segmentSize: SegmentSize.LARGE,
    segmentColor: SegmentColor.DEFAULT,
  },
  render: (args) =>
    html`
      <atp-tab-set
        .tabs="${args['tabs']}"
        .isFullWidth=${args['isFullWidth']}
        .activeIndex=${args['activeIndex']}
        .ariaLabel=${args['ariaLabel']}
        .appearance=${args['appearance']}
        .segmentSize=${args['segmentSize']}
        .segmentColor=${args['segmentColor']}
      >
        <div slot="tabpanel0">grid view content</div>
        <div slot="tabpanel1">list view content</div>
        <div slot="tabpanel2">table view content</div>
      </atp-tab-set>
    `,
  parameters: {
    docs: {
      source: {
        code: `
        <script>
          myTabs = tabs: [
            {name: 'Grid view', id: 'grid-view', iconConfig: {icon: 'grid'}},
            {name: 'List view', id: 'list-view', iconConfig: {icon: 'list'}},
            {name: 'Table view', id: 'table-view', iconConfig: {icon: 'table-list'}},
          ]
        </script>
          
        <atp-tab-set
          tabs="myTabs"
          isFullWidth="false"
          activeIndex="0"
          ariaLabel="View options"
          appearance="segmented"
        >
          <div slot="tabpanel0">grid view content</div>
          <div slot="tabpanel1">list view content</div>
          <div slot="tabpanel2">table view content</div>
        </atp-tab-set>
        `,
      },
    },
  },
};
