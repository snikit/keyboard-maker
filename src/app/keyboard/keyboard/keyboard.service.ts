import { KeyboardUtils } from './keyboard.utils';

export class KeyboardService {
  private iso = { qwerty: false, lang: 'en' };

  private board: HTMLElement | null;
  private input: HTMLElement | null;
  private pre: HTMLElement | null;
  private keys: NodeListOf<HTMLElement>;
  private shift: HTMLElement | null;
  private alt: HTMLElement | null;
  private caps: HTMLElement | null;

  private isCap = false;
  private isShift = false;
  private isAlt = false;

  constructor(private container: HTMLElement) {
    this.board = container.querySelector('#kboard');
    this.input = container.querySelector('.kboard-input');
    this.pre = container.querySelector('#kboard-preview');
    this.keys = container.querySelectorAll('button');
    this.shift = container.querySelector('#kboard-shift');
    this.caps = container.querySelector('#kboard-capslock');
    this.alt = container.querySelector('#kboard-alt');
  }

  // forEachKey = (callback : ()=>{} ) =>{
  //   for (let i of KeyboardConstants.KEYS) {
  //     $('#' + keyArray[i] + '-key').addClass('down');
  //     doKeyDown(i);
  //   }
  // }

  animate() {}

  keydown(key: string) {
    let keyElement = this.getKey(key);
    keyElement?.classList.add('keyActive');
  }

  keyup(key: string) {
    let keyElement = this.getKey(key);
    keyElement?.classList.remove('keyActive');
  }

  getKey(key: string) {
    let keyname = KeyboardUtils.getKeyName(key);
    return this.container.querySelector(`#${keyname}`);
  }
}
