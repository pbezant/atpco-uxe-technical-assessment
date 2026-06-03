import { LitElement } from 'lit';
import { DateTime } from 'luxon';
import { IconConfig } from '../icon/icon';
import { InputField } from '../input-field/input-field';
import { MenuListItem } from '../shared/interfaces';
export interface DateRange {
    isTitle: boolean;
    name: string;
    start: DateTime;
    end: DateTime;
}
type OptionalDate = DateTime | null | undefined;
/**
 * Datepicker allows the user to select a date or date range from a calendar.
 */
export declare class Datepicker extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * Set if datepicker is visible
     */
    isVisible: boolean;
    /**
     * primary active date
     */
    date: OptionalDate;
    /**
     * End date for range
     */
    date2: OptionalDate;
    /**
     * Min date
     */
    minDate: DateTime;
    /**
     * Max date
     */
    maxDate: DateTime;
    /**
     * Restricted dates
     */
    notAllowedDates: DateTime[];
    /**
     * Datepicker to be used as solo picker
     */
    isSoloPicker: boolean;
    /**
     * Datepicker to be used as range picker
     */
    isMultiPicker: boolean;
    /**
     * preselected date ranges
     */
    preselectedRanges: DateRange[];
    _slottedInputElements: InputField[];
    _slottedInputElements2: InputField[];
    _calendarIcon: IconConfig;
    _activeDate: DateTime;
    _hasClickedOnce: boolean;
    _calendarDays: DateTime[];
    _keyboardActive: boolean;
    _isSelectingSecond: boolean;
    _input1: InputField | undefined;
    _input2: InputField | undefined;
    _inputLabel: boolean;
    _yearDropdownVisible: boolean;
    _monthDropdownVisible: boolean;
    _secondInput: boolean;
    willUpdate(changedProps: Map<string, unknown>): void;
    updated(changedProps: Map<string, unknown>): void;
    connectedCallback(): Promise<void>;
    _normalizeChangedDates(changedProps: Map<string, unknown>): void;
    _normalizeRequiredDate(date: unknown, fallback: DateTime): DateTime;
    _normalizeOptionalDate(date: unknown): DateTime | null;
    _getClampedDefaultDate(): DateTime;
    _getCalendarAnchorDate(date: OptionalDate): DateTime;
    _formatDate(date: OptionalDate): string;
    _syncInputValues(): void;
    _emitClosedEvent(): void;
    _clickOutsideHandler: (e: MouseEvent) => void;
    _moveFocus(offset: number): Promise<void>;
    _onKeyDown(e: KeyboardEvent): void;
    _updateCalendarGrid(): Promise<void>;
    _goToNextMonth(): void;
    _goToPreviousMonth(): void;
    _goToNextYear(): void;
    _goToPreviousYear(): void;
    _onDateClick(date: DateTime): void;
    _dayDisabled(date: DateTime): boolean;
    _getDayCellClass(date: DateTime): string;
    _getSelectedDateRange(): {
        start: DateTime;
        end: DateTime;
    } | null;
    _firstListenerWrapper: () => void;
    _secondListenerWrapper: () => void;
    _handleFirstToggle(status: boolean): void;
    _handleSecondToggle(status?: boolean): void;
    firstUpdated(): Promise<void>;
    _dateOutput: (e: Event) => void;
    _date2Output: (e: Event) => void;
    _getYearOptions(): MenuListItem[];
    _getMonthOptions(): MenuListItem[];
    _toggleMonthDropdown(status: boolean): void;
    _toggleYearDropdown(status: boolean): void;
    _handleMonthSelect: ({ detail }: {
        detail: string[];
    }) => void;
    _handleYearSelect: ({ detail }: {
        detail: string[];
    }) => void;
    _setRange(item: DateRange): void;
    disconnectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
    _getCalendar(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-datepicker': Datepicker;
    }
}
export {};
