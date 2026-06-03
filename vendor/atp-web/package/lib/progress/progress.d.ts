import { LitElement } from 'lit';
export declare enum ProgressAppearance {
    DEFAULT = "default",
    CIRCLE = "circle"
}
/**
 * Progress represents the completion progress of a task.
 *
 * (To represent a fractional or scalar value, use Meter instead.)
 */
export declare class Progress extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * set appearance 'default' | 'circle'
     */
    appearance: ProgressAppearance;
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
        'atp-progress': Progress;
    }
}
