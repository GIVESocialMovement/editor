import { Control } from '../control';
import { Editor } from '../editor';
export interface RawBlock {
    type: string;
}
export interface BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare abstract class Block {
    editor: Editor;
    elem: HTMLDivElement;
    container: HTMLDivElement;
    deleteButton: HTMLSpanElement;
    deleteIcon: HTMLDivElement;
    control: Control;
    constructor(editor: Editor);
    redraw(): void;
    abstract getRawContent(): RawBlock;
    focus(): void;
}
