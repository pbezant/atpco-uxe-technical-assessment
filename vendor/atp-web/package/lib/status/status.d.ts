import { LitElement } from 'lit';
export declare enum StatusColor {
    DANGER = "danger",
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning"
}
export declare enum StatusSize {
    L = "large",
    M = "medium"
}
/**
 * Status shows the current status of a feature.
 */
export declare class Status extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets label shown on status
     */
    label: string;
    /**
     * sets color of status. default: success
     */
    color: StatusColor;
    /**
     * sets size of status. default: medium
     */
    size: StatusSize;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-status': Status;
    }
}
