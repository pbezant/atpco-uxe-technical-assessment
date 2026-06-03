import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
export declare enum MediaObjectColor {
    BLUE = "blue",
    GREEN = "green",
    PURPLE = "purple",
    RED = "red",
    SLATE = "slate"
}
/**
 * MediaObject pairs a small image or icon with some basic descriptive information.
 */
export declare class MediaObject extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets string label shown on media object, if iconText is provided icon will be hidden
     */
    iconText: string;
    /**
     * sets icon shown on media object, will be hidden if iconText is present
     */
    icon: IconConfig;
    /**
     * sets media object label
     */
    label: string;
    /**
     * sets media object subtitle
     */
    subtitle: string;
    /**
     * sets media object color
     */
    color: MediaObjectColor;
    render(): import('lit-html').TemplateResult<1>;
    _getIconClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-media-object': MediaObject;
    }
}
