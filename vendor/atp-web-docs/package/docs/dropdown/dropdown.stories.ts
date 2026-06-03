import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import './dropdown';
import '../button/button';
import {html} from 'lit';
import {VisualPosition} from '../shared/enums';
import {DropdownFilterMatching, DropdownFilterPriority, DropdownSelectionMode} from './dropdown';

const meta: Meta = {
  component: 'atp-dropdown',
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  argTypes: {
    itemsList: {},
    visualPosition: {
      options: [
        VisualPosition.RIGHT,
        VisualPosition.LEFT,
        VisualPosition.TOP,
        VisualPosition.BOTTOM,
      ],
      control: {type: 'inline-radio'},
    },
    filterMatching: {
      options: [DropdownFilterMatching.INCLUDES, DropdownFilterMatching.STARTS_WITH],
      control: {type: 'inline-radio'},
    },
    filterPriority: {
      options: [
        DropdownFilterPriority.BOTH,
        DropdownFilterPriority.NAME,
        DropdownFilterPriority.DESCRIPTION,
      ],
      control: {type: 'inline-radio'},
    },
    selectionMode: {
      options: [DropdownSelectionMode.MULTIPLE, DropdownSelectionMode.SINGLE],
      control: {type: 'inline-radio'},
    },
  },
  parameters: {
    actions: {
      handles: ['dropdownClosedOutput', 'itemSelectedOutput'],
    },
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    itemsList: [
      {name: 'Item 1', description: 'Item 1 description', id: 'item-1'},
      {name: 'Item 2', description: 'Item 2 description', id: 'item-2'},
      {name: 'Item 3', description: 'Item 3 description', id: 'item-3'},
      {name: 'Item 4', description: 'Item 4 description', id: 'item-4'},
      {name: 'Item 5', description: 'Item 5 description', id: 'item-5'},
    ],
    activeIds: ['item-3'],
    isSearchVisible: false,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    visualPosition: VisualPosition.RIGHT,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
    selectionMode: DropdownSelectionMode.MULTIPLE,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    visualPosition,
    filterMatching,
    filterPriority,
    selectionMode,
  }) => html`
    <atp-dropdown
      style="width: 300px;"
      .itemsList=${itemsList}
      .activeIds=${activeIds}
      .isMenuVisible=${true}
      .isSearchVisible=${isSearchVisible}
      .placeholder=${placeholder}
      .searchValue=${searchValue}
      .openAtActiveIndex=${openAtActiveIndex}
      .visualPosition=${visualPosition}
      .filterMatching=${filterMatching}
      .filterPriority=${filterPriority}
      .selectionMode=${selectionMode}
    ></atp-dropdown>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-dropdown
      style="width: 300px; height: 300px;"
      .itemsList=\${itemsList}
      .activeIds=\${activeIds}
      .isSearchVisible=\${isSearchVisible}
      .placeholder=\${placeholder}
      .searchValue=\${searchValue}
      .openAtActiveIndex=\${openAtActiveIndex}
    ></atp-dropdown>`,
      },
    },
  },
};

export const SimpleDropdown: Story = {
  args: {
    itemsList: [
      {name: 'Option 1', id: 'item-1'},
      {name: 'Option 2', id: 'item-2'},
      {name: 'Option 3', id: 'item-3'},
    ],
    activeIds: ['item-15'],
    isSearchVisible: false,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    filterMatching,
    filterPriority,
  }) => html`
    <div class="atp-dropdown-wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        class="atp-dropdown-wrapper__menu"
        style="width: 200px;"
        .itemsList=${itemsList}
        .activeIds=${activeIds}
        .isSearchVisible=${isSearchVisible}
        .placeholder=${placeholder}
        .searchValue=${searchValue}
        .openAtActiveIndex=${openAtActiveIndex}
        .showCheckmarks=${false}
        .filterMatching=${filterMatching}
        .filterPriority=${filterPriority}
      ></atp-dropdown>
    </div>
    <p>Some other content</p>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;
      dropdown.addEventListener('dropdownClosedOutput', (e) => {
        if (e.detail?.keyboard) button.focusButton();
      });

      button?.addEventListener('clickEventOutput', () => {
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
        code: ` <div class="atp-dropdown-wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        class="atp-dropdown-wrapper__menu"
        style="width: 200px;"
        .itemsList=\${itemsList}
        .activeIds=\${activeIds}
        .isSearchVisible=\${isSearchVisible}
        .placeholder=\${placeholder}
        .searchValue=\${searchValue}
        .openAtActiveIndex=\${openAtActiveIndex}
        .showCheckmarks=\${false}
      ></atp-dropdown>
    </div>
    <p>Some other content</p>`,
      },
    },
  },
};

export const CheckDropdown: Story = {
  args: {
    itemsList: [
      {name: 'Title 1', id: 'item-1', isTitle: true, titleAction: true},
      {
        name: 'Item 1 Which has a longlonglonglonglonglonglonglong title',
        isParentItem: true,
        id: 'item-1',
      },
      {name: 'Title 2', id: 'item-2', isTitle: true, titleAction: true},
      {
        name: 'Item 2',
        id: 'item-2',
        isParentItem: true,
        description: 'Long Description Test Test Test Test Test Test Test Test Test',
      },
      {name: 'Item 3', id: 'item-3', description: 'Description'},
      {
        name: 'Item 4 which has a longer title',
        description: 'And also a description',
        id: 'item-4',
      },
      {
        name: 'Item 5 There is a description on this item too but it is hidden because the title is large',
        description: 'description',
        id: 'item-5',
      },
      {
        name: 'Item 6',
        id: 'item-6',
        description: 'Long Description Test Test Test Test Test Test Test Test Test',
      },
      {name: 'Item 7', id: 'item-7'},
      {name: 'Item 8', id: 'item-8', isTitle: true, titleAction: false},
      {name: 'Item 9', id: 'item-9'},
      {name: 'Item 10', id: 'item-10'},
      {name: 'Item 11', id: 'item-11'},
      {name: 'Item 12', id: 'item-12'},
      {name: 'Item 13', id: 'item-13'},
      {name: 'Item 14', id: 'item-14'},
    ],
    activeIds: ['item-12'],
    isSearchVisible: false,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: true,
    visualPosition: VisualPosition.RIGHT,
    showCheckmarks: true,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    visualPosition,
    showCheckmarks,
    filterMatching,
    filterPriority,
  }) => html`
    <div class="atp-dropdown-wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        class="atp-dropdown-wrapper__menu"
        style="width: 300px;"
        .itemsList=${itemsList}
        .activeIds=${activeIds}
        .isSearchVisible=${isSearchVisible}
        .placeholder=${placeholder}
        .searchValue=${searchValue}
        .openAtActiveIndex=${openAtActiveIndex}
        .visualPosition=${visualPosition}
        .showCheckmarks=${showCheckmarks}
        .filterMatching=${filterMatching}
        .filterPriority=${filterPriority}
      >
      </atp-dropdown>
    </div>
    <p>Some other content</p>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;
      dropdown.addEventListener('dropdownClosedOutput', (e) => {
        if (e.detail?.keyboard) button.focusButton();
      });

      button?.addEventListener('clickEventOutput', () => {
        handleClick(!showToggle);
      });

      dropdown?.addEventListener('itemSelectedOutput', ({detail}) => {
        dropdown.activeIds = detail;
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
        code: `<div class="atp-dropdown-wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        class="atp-dropdown-wrapper__menu"
        style="width: 300px;"
        .itemsList=\${itemsList}
        .activeIds=\${activeIds}
        .isSearchVisible=\${isSearchVisible}
        .placeholder=\${placeholder}
        .searchValue=\${searchValue}
        .openAtActiveIndex=\${openAtActiveIndex}
        .visualPosition=\${VisualPosition}
        .showCheckmarks=\${showCheckmarks}
      >
      </atp-dropdown>
    </div>
    <p>Some other content</p>`,
      },
    },
  },
};

export const IconsAndColors: Story = {
  args: {
    itemsList: [
      {name: 'All Statuses', id: 'item-1'},
      {
        name: 'Green',
        color: '#519E8F',
        icon: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
<circle cx="4" cy="4" r="4" fill="#519E8F"/>
</svg>`,
        },
        id: 'green',
      },
      {
        name: 'Purple',
        color: '#9F80E4',
        icon: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
<circle cx="4" cy="4" r="4" fill="#9F80E4"/>
</svg>`,
        },
        id: 'purple',
      },
      {
        name: 'Orange',
        color: '#EF9536',
        icon: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
<circle cx="4" cy="4" r="4" fill="#EF9536"/>
</svg>`,
        },
        id: 'orange',
      },
    ],
    activeIds: [],
    isSearchVisible: false,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    filterMatching,
    filterPriority,
  }) => html`
    <div class="wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        style="width: 200px;"
        .itemsList=${itemsList}
        .activeIds=${activeIds}
        .isSearchVisible=${isSearchVisible}
        .placeholder=${placeholder}
        .searchValue=${searchValue}
        .openAtActiveIndex=${openAtActiveIndex}
        .showCheckmarks=${false}
        .filterMatching=${filterMatching}
        .filterPriority=${filterPriority}
      ></atp-dropdown>
    </div>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;

      button?.addEventListener('clickEventOutput', () => {
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
        code: ` <div class="wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        style="width: 200px;"
        .itemsList=\${itemsList}
        .activeIds=\${activeIds}
        .isSearchVisible=\${isSearchVisible}
        .placeholder=\${placeholder}
        .searchValue=\${searchValue}
        .openAtActiveIndex=\${openAtActiveIndex}
        .showCheckmarks=\${false}
      ></atp-dropdown>
    </div>`,
      },
    },
  },
};

export const NestedDropdown: Story = {
  args: {
    itemsList: [
      {
        name: 'Option 1',
        id: 'item-1',
      },
      {name: 'Option 2', id: 'item-2'},
      {
        name: 'Option 3',
        id: 'item-3',
        children: [
          {name: 'Option 1', id: 'child-1'},
          {name: 'Option 2', id: 'child-2'},
          {name: 'Option 3', id: 'child-3'},
        ],
      },
    ],
    activeIds: ['child-3'],
    isSearchVisible: false,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: true,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    filterMatching,
    filterPriority,
  }) => html`
    <div class="wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        style="width: 200px;"
        .itemsList=${itemsList}
        .activeIds=${activeIds}
        .isSearchVisible=${isSearchVisible}
        .placeholder=${placeholder}
        .searchValue=${searchValue}
        .openAtActiveIndex=${openAtActiveIndex}
        .showCheckmarks=${true}
        .filterMatching=${filterMatching}
        .filterPriority=${filterPriority}
      ></atp-dropdown>
    </div>

    <script>
      button = document.getElementById('button');
      dropdown = document.getElementById('dropdown');
      showToggle = false;
      dropdown.addEventListener('dropdownClosedOutput', (e) => {
        if (e.detail?.keyboard) button.focusButton();
      });

      button?.addEventListener('clickEventOutput', () => {
        handleClick(!showToggle);
      });

      dropdown?.addEventListener('itemSelectedOutput', ({detail}) => {
        dropdown.activeIds = [detail[0]];
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
        code: ` <div class="wrapper">
      <atp-button id="button" label="Toggle Dropdown"></atp-button>
      <atp-dropdown
        id="dropdown"
        style="width: 200px;"
        .itemsList=\${itemsList}
        .activeIds=\${activeIds}
        .isSearchVisible=\${isSearchVisible}
        .placeholder=\${placeholder}
        .searchValue=\${searchValue}
        .openAtActiveIndex=\${openAtActiveIndex}
        .showCheckmarks=\${true}
      ></atp-dropdown>
    </div>`,
      },
    },
  },
};

export const HeaderExample: Story = {
  args: {
    itemsList: [
      {description: 'Air France', name: 'AF', id: 'item-af'},
      {description: 'Air India', name: 'AI', id: 'item-ai'},
      {description: 'American Airlines', name: 'AA', id: 'item-aa'},
      {description: 'Delta Air Lines', name: 'DL', id: 'item-dl'},
      {description: 'easyJet', name: 'U2', id: 'item-u2'},
      {description: 'Emirates', name: 'EK', id: 'item-ek'},
      {description: 'Iberia', name: 'IB', id: 'item-ib'},
      {description: 'Qatar Airways', name: 'QR', id: 'item-qr'},
      {description: 'United Airlines', name: 'UA', id: 'item-ua'},
    ],
    activeIds: ['item-aa'],
    isSearchVisible: true,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    visualPosition: VisualPosition.RIGHT,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    visualPosition,
    filterMatching,
    filterPriority,
  }) => html`
    <atp-dropdown
      style="width: 300px;"
      .itemsList=${itemsList}
      .activeIds=${activeIds}
      .isMenuVisible=${true}
      .isSearchVisible=${isSearchVisible}
      .placeholder=${placeholder}
      .searchValue=${searchValue}
      .openAtActiveIndex=${openAtActiveIndex}
      .visualPosition=${visualPosition}
      .filterMatching=${filterMatching}
      .filterPriority=${filterPriority}
    ></atp-dropdown>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-dropdown
      style="width: 300px; height: 300px;"
      .itemsList=\${itemsList}
      .activeIds=\${activeIds}
      .isSearchVisible=\${isSearchVisible}
      .placeholder=\${placeholder}
      .searchValue=\${searchValue}
      .openAtActiveIndex=\${openAtActiveIndex}
    ></atp-dropdown>`,
      },
    },
  },
};

export const FilterMatching: Story = {
  args: {
    itemsList: [
      {description: 'Air France', name: 'AF', id: 'item-af'},
      {description: 'Air India', name: 'AI', id: 'item-ai'},
      {description: 'American Airlines', name: 'AA', id: 'item-aa'},
      {description: 'Delta Air Lines', name: 'DL', id: 'item-dl'},
      {description: 'easyJet', name: 'U2', id: 'item-u2'},
      {description: 'Emirates', name: 'EK', id: 'item-ek'},
      {description: 'Iberia', name: 'IB', id: 'item-ib'},
      {description: 'Qatar Airways', name: 'QR', id: 'item-qr'},
      {description: 'United Airlines', name: 'UA', id: 'item-ua'},
    ],
    activeIds: ['item-aa'],
    isSearchVisible: true,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    filterMatching: DropdownFilterMatching.STARTS_WITH,
    filterPriority: DropdownFilterPriority.BOTH,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    filterMatching,
    filterPriority,
  }) => html`
    <p>
      By default, the search filter will match <em>any</em> result that includes the search term.
      You can change this to only match results that <em>start with</em> the search term.
    </p>
    <p>
      In this example, the search term must match the start of the name or description. Enter "ai"
      to see this in action.
    </p>
    <atp-dropdown
      style="width: 300px;"
      .itemsList=${itemsList}
      .activeIds=${activeIds}
      .isMenuVisible=${true}
      .isSearchVisible=${isSearchVisible}
      .placeholder=${placeholder}
      .searchValue=${searchValue}
      .openAtActiveIndex=${openAtActiveIndex}
      .filterMatching=${filterMatching}
      .filterPriority=${filterPriority}
    ></atp-dropdown>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-dropdown
      style="width: 300px; height: 300px;"
      .itemsList=\${itemsList}
      .activeIds=\${activeIds}
      .isSearchVisible=\${isSearchVisible}
      .placeholder=\${placeholder}
      .searchValue=\${searchValue}
      .openAtActiveIndex=\${openAtActiveIndex}
      .filterMatching=\${filterMatching}
    ></atp-dropdown>`,
      },
    },
  },
};

export const FilterPriority: Story = {
  args: {
    itemsList: [
      {name: 'AB', description: 'Item 1', id: 'item-1'},
      {name: 'AC', description: 'Item 2', id: 'item-2'},
      {name: 'AD', description: 'Actual Item 3', id: 'item-3'},
      {name: 'BB', description: 'Item 4', id: 'item-4'},
      {name: 'DE', description: 'Item 5', id: 'item-5'},
      {name: 'SO', description: 'Actual Item 6', id: 'item-6'},
    ],
    activeIds: ['item-1'],
    isSearchVisible: true,
    searchValue: '',
    placeholder: 'Search',
    openAtActiveIndex: false,
    filterMatching: DropdownFilterMatching.INCLUDES,
    filterPriority: DropdownFilterPriority.DESCRIPTION,
  },
  render: ({
    itemsList,
    activeIds,
    openAtActiveIndex,
    isSearchVisible,
    searchValue,
    placeholder,
    filterMatching,
    filterPriority,
  }) => html`
    <p>
      By default, the search filter will not prioritize results. You can set it to prioritize
      matches to the name or to the description, putting those results first.
    </p>
    <p>
      In this example, the search results will first show matches to the description, then show
      matches to the name. Search for "a" to see this in action.
    </p>
    <atp-dropdown
      style="width: 300px;"
      .itemsList=${itemsList}
      .activeIds=${activeIds}
      .isMenuVisible=${true}
      .isSearchVisible=${isSearchVisible}
      .placeholder=${placeholder}
      .searchValue=${searchValue}
      .openAtActiveIndex=${openAtActiveIndex}
      .filterMatching=${filterMatching}
      .filterPriority=${filterPriority}
    ></atp-dropdown>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-dropdown
      style="width: 300px; height: 300px;"
      .itemsList=\${itemsList}
      .activeIds=\${activeIds}
      .isSearchVisible=\${isSearchVisible}
      .placeholder=\${placeholder}
      .searchValue=\${searchValue}
      .openAtActiveIndex=\${openAtActiveIndex}
      .filterPriority=\${filterPriority}
    ></atp-dropdown>`,
      },
    },
  },
};
