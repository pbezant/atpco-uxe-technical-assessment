import { LitElement } from 'lit';
export declare enum AlertColor {
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
export declare enum AlertAppearance {
    FULL = "full",
    PAGE = "page",
    EXPANDABLE = "expandable",
    PAGE_SMALL = "page-small",
    TOAST = "toast"
}
export declare enum AlertRole {
    NONE = "none",
    ALERT = "alert",
    STATUS = "status"
}
/**
 * Alert displays an important message in a way that attracts the user's attention without interrupting the user's task.
 * It can be used as a window-level banner, page-level banner, expandable page-level banner, or toast/snackbar notification.
 */
export declare class Alert extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets the icon in the alert
     */
    icon?: string;
    /**
     * sets string label shown on the alert
     */
    label: string;
    /**
     * set appearance 'full' | 'page' | 'expandable' | 'page-small' | 'toast'
     */
    appearance: AlertAppearance;
    /**
     * set color
     */
    color: AlertColor;
    /**
     * hide the 'x' button that will close the alert
     */
    hideClose: boolean;
    /**
     * set the ARIA `role` property on the alert
     */
    role: AlertRole;
    _showContent: boolean;
    render(): import('lit-html').TemplateResult<1>;
    private _getClasses;
    private _getRole;
    _useFocusInverse(): boolean;
    _toggleContent(): void;
    _closeHandler(): void;
    private _getColor;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-alert': Alert;
    }
}
