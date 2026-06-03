import { LitElement } from 'lit';
export declare enum MeterAppearance {
    DEFAULT = "default",
    CIRCLE = "circle"
}
/**
 * Meter represents either a scalar value within a known range, or a fractional value.
 *
 * (To represent the amount of completion of a task, use Progress instead.)
 */
export declare class Meter extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * set appearance 'default' | 'circle'
     */
    appearance: MeterAppearance;
    /**
     * sets min value
     */
    min: any;
    /**
     * sets max value
     */
    max: any;
    /**
     * sets current value
     */
    value: any;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-meter': Meter;
    }
}
