import { LitElement } from 'lit';
export interface FileObject {
    id: string;
    file: File;
    warnings: string[];
    isSuccess: boolean;
    isFailure: boolean;
}
/**
 * FileUpload is an interactive element that lets the user upload a
 * file(s) from their device.
 */
export declare class FileUpload extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets string label shown on tag
     */
    subLabel: string;
    /**
     * max file size in bytes, set to -1 to have no max size
     */
    maxFileSize: number;
    /**
     * e.g. ['image/png', 'image/jpeg', 'application/pdf']
     * allowed file types, to allow all types this should be an empty array
     */
    allowedFileTypes: any[];
    /**
     * number of files that can be uploaded, set to -1 for no limit
     */
    maxNumberOfFiles: number;
    /**
     * Array of fileobjects
     */
    fileItemList: FileObject[];
    /**
     * Make file drop area text/logo centered
     */
    isCentered: boolean;
    /**
     * Hide list of files with action options
     */
    hideFileList: boolean;
    _isDragOver: boolean;
    render(): import('lit-html').TemplateResult<1>;
    _activeDropdown: string;
    _dropdownItems: {
        name: string;
        id: string;
    }[];
    _toggleDropdown(id: string, status: boolean): void;
    _dropdownItemSelected: ({ detail }: {
        detail: any;
    }, item: FileObject) => void;
    _getSize(bytes: number): string;
    _getCompletion(): number;
    _getValidity(): boolean;
    _getHeaderTitle(): import('lit-html').TemplateResult<1>;
    _setDragOver(e: Event, status: boolean): void;
    _handleDrop(e: DragEvent): void;
    _getFileItemAction(item: FileObject): import('lit-html').TemplateResult<1>;
    _cancelFile: (file: FileObject) => void;
    _getFileItemStatus(item: FileObject): import('lit-html').TemplateResult<1>;
    _initiateReplace: (id: string) => void;
    _handleReplaceInput(e: Event, replaceId: string): void;
    _handleInput(e: Event): void;
    _isFileTypeAllowed(file: File): boolean;
    _verifyFiles(files: FileList): {
        file: File;
        warnings: any[];
        isSuccess: boolean;
        isFailure: boolean;
        id: string;
    }[];
    _emitFiles(fileObjects: FileObject[]): void;
    _manualFileInput(): void;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-file-upload': FileUpload;
    }
}
