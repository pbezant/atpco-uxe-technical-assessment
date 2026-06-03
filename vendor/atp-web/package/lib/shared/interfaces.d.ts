import { IconConfig } from '../icon/icon';
/**
 * Dropdown list item
 * @readonly
 * @property {string} name required - label that is shown
 * @property {string} id required - unique item id
 * @property {boolean} isDisabled optional - set disabled state
 * @property {string} description optional - item description text
 * @property {boolean} isTitle optional - set item to be a title item
 * @property {boolean} titleAction optional - allow select/deselect all title action
 * @property {boolean} isParentItem optional - show right chevron to indicate parent item
 * @property {boolean} icon optional - icon config for optional icon on the left
 * @property {boolean} color optional - value will be assigned to css 'color' property
 * @property {boolean} children optional - add nested menu

 * */
export interface MenuListItem {
    name: string;
    id: string;
    isDisabled?: boolean;
    description?: string;
    isTitle?: boolean;
    titleAction?: boolean;
    icon?: IconConfig;
    color?: string;
    children?: MenuListItem[];
}
