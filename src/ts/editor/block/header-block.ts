import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'header';

interface RawTextBlock extends RawBlock {
  content: string;
}

export class HeaderBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawHeaderBlock = rawBlock as RawTextBlock;
    return new HeaderBlock(editor, rawHeaderBlock.content);
  }
}

export class HeaderBlock extends Block {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public editor: Editor, public content: string) {
    super(editor);
    this.elem.classList.add('editor-block__text');
    this.elem.appendChild(this.textarea);

    this.textarea.innerHTML = this.content;
  }

  focus(): void {
    this.textarea.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawTextBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}