import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'header';

export interface RawHeaderBlock extends RawBlock {
  content: string;
}

export class HeaderBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawHeaderBlock = rawBlock as RawHeaderBlock;
    return new HeaderBlock(editor, rawHeaderBlock.content);
  }
}

export class HeaderBlock extends Block {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public editor: Editor, public content: string) {
    super(editor);
    this.elem.classList.add('editor-block', 'editor-block__text');
    this.elem.appendChild(this.textarea);

    this.textarea.classList.add('editor-block__container__editor', 'editor-block__header');
    this.textarea.innerHTML = this.content;

    this.autoresizeTextarea(this.textarea)
  }

  focus(): void {
    super.focus();
    this.textarea.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawHeaderBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}