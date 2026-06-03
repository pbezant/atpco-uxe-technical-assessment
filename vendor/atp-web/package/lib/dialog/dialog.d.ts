import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
export declare enum DialogPosition {
    BLOCK_START = "block-start",
    CENTER = "center"
}
export declare enum DialogDrawer {
    BLOCK_END = "block-end",
    BLOCK_START = "block-start",
    INLINE_END = "inline-end"
}
/**
 * Dialog sits on top of other
 * page content, interrupting flow and capturing focus until it is dismissed.
 *
 * It can also be used to make "drawers", which are dialogs that slide in from the side
 * of the viewport.
 */
export declare class Dialog extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * set if dialog is open
     */
    open: boolean;
    /**
     * sets string title shown in the dialog header
     */
    label: string;
    /**
     * icon config for the icon in the header
     */
    iconConfig: IconConfig;
    /**
     * set position of the dialog. Default: BLOCK_START, which means "top" in LTR locales
     */
    position: DialogPosition;
    /**
     * set the dialog to slide in from the specified direction as a "drawer".
     * This overrides "position".
     */
    drawer?: DialogDrawer;
    /**
     * sets whether clicks to the backdrop do nothing and will not close the dialog. Default false
     */
    preventClickOnBackdrop: boolean;
    private _footerSlot;
    _hasFooterContent: boolean;
    private _onClickCloseButton;
    private _titleId;
    render(): import('lit-html').TemplateResult<1>;
    private _onEscape;
    private _checkExternalClick;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updated(): void;
    _onFooterSlotChange: () => void;
    _reflectFooterPresence(): void;
    private _getClasses;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-dialog': Dialog;
    }
}
