import type {Meta, StoryObj} from '@storybook/web-components-vite';
import {withActions} from 'storybook/actions/decorator';
import {html} from 'lit';
import './datepicker';
import {DateTime} from 'luxon';

const exampleDate = DateTime.fromISO('2025-08-14');

const meta: Meta = {
  component: 'atp-datepicker',
  title: 'Components/Datepicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      component: 'Datepicker',
    },
    actions: {
      handles: ['date2SelectedOutput', 'dateSelectedOutput'],
    },
  },
  decorators: [withActions],
  argTypes: {
    date: exampleDate,
  },
};

export default meta;
type Story = StoryObj;

const args = {
  date: exampleDate,
  date2: exampleDate,
  minDate: exampleDate.minus({years: 2}),
  maxDate: exampleDate.plus({years: 2}),
  isVisible: false,
  notAllowedDates: [
    exampleDate.plus({days: 8}),
    exampleDate.plus({days: 12}),
    exampleDate.plus({days: 15}),
    exampleDate.plus({days: 18}),
    exampleDate.plus({days: 19}),
    exampleDate.minus({days: 7}),
    exampleDate.minus({days: 2}),
    exampleDate.minus({days: 5}),
    exampleDate.minus({days: 8}),
    exampleDate.minus({days: 12}),
    exampleDate.minus({days: 15}),
    exampleDate.minus({days: 18}),
    exampleDate.minus({days: 19}),
    exampleDate.minus({days: 7}),
  ],
};

export const Primary: Story = {
  args: {
    ...args,
    isVisible: true,
  },
  render: ({
    date,
    preselectedRanges,
    date2,
    minDate,
    maxDate,
    notAllowedDates,
    isVisible,
  }) => html`<atp-datepicker
      id="datepicker"
      .notAllowedDates=${notAllowedDates}
      .maxDate=${maxDate}
      .minDate=${minDate}
      .date2=${date2}
      .date=${date}
      .isVisible=${isVisible}
      .preselectedRanges=${preselectedRanges}
    >
    </atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
        }
      });
    </script> `,
  parameters: {
    docs: {
      source: {
        code: `<atp-datepicker
      id="datepicker"
      .notAllowedDates=\${notAllowedDates}
      .maxDate=\${maxDate}
      .minDate=\${minDate}
      .date2=\${date2}
      .date=\${date}
      .isVisible=\${isVisible}
    >
    </atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
        }
      });
    </script>`,
      },
    },
  },
};

export const SoloPicker: Story = {
  args: {
    ...args,
  },
  render: ({date, date2, minDate, maxDate, notAllowedDates}) => html`
    <style>
      .atp-input-field {
        max-width: 150px;
      }
    </style>
    <atp-datepicker
      id="datepicker"
      .isSoloPicker=${true}
      .notAllowedDates=${notAllowedDates}
      .maxDate=${maxDate}
      .minDate=${minDate}
      .date2=${date2}
      .date=${date}
    >
      <atp-input-field
        helpText="MM/dd/yyyy"
        class="atp-input-field"
        id="input"
        label="Start Date"
        slot="date"
      >
        <input aria-label="date" id="date" />
      </atp-input-field>
    </atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      input = document.getElementById('input');

      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
          input.helpText = 'MM/dd/yyyy';
          input.isError = false;
        } else {
          input.helpText = 'Invalid date';
          input.isError = true;
        }
      });
    </script>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-datepicker
      id="datepicker"
      .isSoloPicker=\${true}
      .notAllowedDates=\${notAllowedDates}
      .maxDate=\${maxDate}
      .minDate=\${minDate}
      .date2=\${date2}
      .date=\${date}
    >
      <atp-input-field helpText="MM/dd/yyyy" class="atp-input-field" id="input" label="Start Date" slot="date">
        <input aria-label="date" id="date" />
      </atp-input-field>
    </atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      input = document.getElementById('input');

      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
          input.helpText = 'MM/dd/yyyy';
          input.isError = false;
        } else {
          input.helpText = 'Invalid date';
          input.isError = true;
        }
      });
    </script>`,
      },
    },
  },
};

export const ReactiveDateUpdates: Story = {
  render: () => {
    const currentDate = DateTime.now().startOf('day');
    const dateOptions = [
      {label: 'No date', value: '', date: null},
      {
        label: currentDate.minus({days: 1}).toFormat('MM/dd/yyyy'),
        value: currentDate.minus({days: 1}).toISODate(),
        date: currentDate.minus({days: 1}),
      },
      {
        label: currentDate.toFormat('MM/dd/yyyy'),
        value: currentDate.toISODate(),
        date: currentDate,
      },
      {
        label: currentDate.plus({days: 1}).toFormat('MM/dd/yyyy'),
        value: currentDate.plus({days: 1}).toISODate(),
        date: currentDate.plus({days: 1}),
      },
    ];

    const updateDate = (event: Event) => {
      const select = event.currentTarget as HTMLSelectElement;
      const selectedOption = dateOptions.find(({value}) => value === select.value);
      const datepicker = select
        .closest('.reactive-datepicker-story')
        ?.querySelector('atp-datepicker');
      if (datepicker) {
        datepicker.date = selectedOption?.date ?? null;
      }
    };

    return html`
      <style>
        .reactive-datepicker-story {
          display: flex;
          flex-direction: column;
          gap: var(--atp-space-m);
          max-inline-size: 240px;
        }

        .reactive-date-select {
          display: flex;
          flex-direction: column;
          gap: var(--atp-space-xxs);
        }
      </style>
      <div class="reactive-datepicker-story">
        <div class="reactive-date-select">
          <label for="reactive-date-select">Parent date value</label>
          <select id="reactive-date-select" @change=${updateDate}>
            ${dateOptions.map(
              ({label, value}) => html`<option
                value=${value}
                ?selected=${value === currentDate.toISODate()}
              >
                ${label}
              </option>`,
            )}
          </select>
        </div>
        <atp-datepicker
          id="reactive-datepicker"
          .isSoloPicker=${true}
          .minDate=${currentDate.minus({years: 1})}
          .maxDate=${currentDate.plus({years: 1})}
          .date=${currentDate}
          @dateSelectedOutput=${(event: CustomEvent) => {
            if (event.detail?.isValid) {
              (event.currentTarget as HTMLElement & {date: DateTime}).date = event.detail;
            }
          }}
        >
          <atp-input-field helpText="MM/dd/yyyy" id="reactive-input" label="Start Date" slot="date">
            <input aria-label="date" id="reactive-date" />
          </atp-input-field>
        </atp-datepicker>
      </div>
    `;
  },
};

export const RangePicker: Story = {
  args: {
    ...args,
    date2: exampleDate.plus({weeks: 1}),
    preselectedRanges: [
      {isTitle: true, name: 'Future'},
      {
        name: 'Next 60 Days',
        start: exampleDate,
        end: exampleDate.plus({days: 60}),
      },
      {
        name: 'Next 90 Days',
        start: exampleDate,
        end: exampleDate.plus({days: 90}),
      },
      {
        name: 'Next 2 Months',
        start: exampleDate,
        end: exampleDate.plus({months: 2}),
      },
      {isTitle: true, name: 'Past'},
      {
        name: 'Past 60 Days',
        start: exampleDate,
        end: exampleDate.minus({days: 60}),
      },
      {
        name: 'Past 90 Days',
        start: exampleDate,
        end: exampleDate.minus({days: 90}),
      },
      {
        name: 'Past 2 Months',
        start: exampleDate,
        end: exampleDate.minus({months: 2}),
      },
    ],
  },
  render: ({date, date2, minDate, maxDate, notAllowedDates, preselectedRanges}) => html`
    <style>
      .atp-input-field {
        max-width: 150px;
      }
      .atp-datepicker {
        margin-inline-start: 150px;
      }
    </style>
    <atp-datepicker
      id="datepicker"
      class="atp-datepicker"
      .isMultiPicker=${true}
      .notAllowedDates=${notAllowedDates}
      .preselectedRanges=${preselectedRanges}
      .maxDate=${maxDate}
      .minDate=${minDate}
      .date2=${date2}
      .date=${date}
    >
      <atp-input-field
        label="Start date"
        class="atp-input-field"
        helpText="MM/dd/yyyy"
        id="input1"
        slot="date"
      >
        <input aria-label="start date" id="start-date" />
      </atp-input-field>
      <atp-input-field
        label="End date"
        class="atp-input-field"
        helpText="MM/dd/yyyy"
        id="input2"
        slot="date2"
      >
        <input aria-label="end date" id="end-date" /> </atp-input-field
    ></atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      input1 = document.getElementById('input1');
      input2 = document.getElementById('input2');

      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
          input1.isError = false;
          input1.helpText = 'dd MM YYYY';
        } else {
          input1.isError = true;
          input1.helpText = 'Invalid date';
        }
      });
      datepicker?.addEventListener('date2SelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date2 = e.detail;
          input2.isError = false;
          input2.helpText = 'dd MM YYYY';
        } else {
          input2.isError = true;
          input2.helpText = 'Invalid date';
        }
      });
    </script>
  `,
  parameters: {
    docs: {
      source: {
        code: `<atp-datepicker
      id="datepicker"
      .isMultiPicker=\${true}
      .notAllowedDates=\${notAllowedDates}
      .maxDate=\${maxDate}
      .minDate=\${minDate}
      .date2=\${date2}
      .date=\${date}
    >
      <atp-input-field label="Start date" class="atp-input-field" helpText="MM/dd/yyyy" id="input1" slot="date">
        <input aria-label="start date" id="start-date" />
      </atp-input-field>
      <atp-input-field label="End date" class="atp-input-field" helpText="MM/dd/yyyy" id="input2" slot="date2">
        <input aria-label="end date" id="end-date" /> </atp-input-field
    ></atp-datepicker>

    <!-- JS implementation will vary depending on setup-->
    <script>
      datepicker = document.getElementById('datepicker');
      input1 = document.getElementById('input1');
      input2 = document.getElementById('input2');

      datepicker?.addEventListener('dateSelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date = e.detail;
          input1.isError = false;
          input1.helpText = 'dd MM YYYY';
        } else {
          input1.isError = true;
          input1.helpText = 'Invalid date';
        }
      });
      datepicker?.addEventListener('date2SelectedOutput', (e) => {
        if (e.detail.isValid) {
          datepicker.date2 = e.detail;
          input2.isError = false;
          input2.helpText = 'dd MM YYYY';
        } else {
          input2.isError = true;
          input2.helpText = 'Invalid date';
        }
      });
    </script>`,
      },
    },
  },
};
