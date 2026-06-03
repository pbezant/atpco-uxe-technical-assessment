import { SegmentSize } from './enums';
export declare function isClickOutside(event: MouseEvent, element: HTMLElement): boolean;
export declare function getUniqueID(id?: string): string;
export interface HDSClassMap {
    [key: string]: boolean;
}
export declare function classMapHDS(classMap: HDSClassMap): string;
export declare function getSegmentIconSize(segmentSize: SegmentSize): 16 | 12;
