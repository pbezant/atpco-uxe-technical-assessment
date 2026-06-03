import { LitElement } from 'lit';
import { Ref } from 'lit/directives/ref.js';
export declare enum TooltipDisplay {
    INLINE_BLOCK = "inline-block",
    BLOCK = "block"
}
export declare enum TooltipInlineAlign {
    CENTER = "center",
    START = "start",
    END = "end"
}
export declare enum TooltipCursor {
    HELP = "help",
    POINTER = "pointer"
}
/**
 * Tooltip is a small, non-interactive element that
 * displays additional details when a triggering element
 * is hovered over or brought into focus.
 */
export declare class Tooltip extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * offset tooltips block start bound (e.g. to avoid header)
     */
    blockStartOffset: number;
    /**
     * offset tooltips inline start bound (e.g. to avoid sidebar)
     */
    inlineStartOffset: number;
    /**
     * Whether we'd prefer the tooltip to be aligned inline with the trigger
     */
    inlineAlign: TooltipInlineAlign;
    /**
     * What kind of cursor to show when the tooltip is hovered over. Default: help
     */
    cursor: TooltipCursor;
    /**
     * sets display property on the container and the trigger. Default: inline-block
     */
    display: TooltipDisplay;
    _containerRef: Ref<HTMLSpanElement>;
    _triggerRef: Ref<HTMLSpanElement>;
    _tooltipRef: Ref<HTMLSpanElement>;
    render(): import('lit-html').TemplateResult<1>;
    _isTriggerActive: boolean;
    _isTooltipActive: boolean;
    _suppressShowAfterScrolling: boolean;
    _showTooltip(): void;
    _checkWhetherToHideTooltip(): void;
    _hideTooltip(): void;
    _onTriggerMouseover(): void;
    _onTriggerMouseout(): void;
    _onTriggerFocus(): void;
    _onTriggerBlur(): void;
    _onTooltipMouseover(): void;
    _onTooltipMouseout(): void;
    _onEscape: (e: KeyboardEvent) => void;
    _onScroll: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    _getClassesContainer(): string;
    _getClassesTrigger(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-tooltip': Tooltip;
    }
}
