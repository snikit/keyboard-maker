export class KeyboardUtils {
  static readonly KEYS = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'zero',
    'minus',
    'plus',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'open-bracket',
    'close-bracket',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'semicolon',
    'apostrophe',
    'hash',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'comma',
    'period',
    'qmark',
    'spacebar',
    'enter',
  ];

  static getKeyName = (keyPress: string) => {
    switch (keyPress) {
      case '#': {
        keyPress = 'hash';
        break;
      }

      case '[': {
        keyPress = 'open-bracket';
        break;
      }

      case ']': {
        keyPress = 'close-bracket';
        break;
      }

      case "'": {
        keyPress = 'aopstrophe';
        break;
      }

      case ';': {
        keyPress = 'semicolon';
        break;
      }

      case ',': {
        keyPress = 'comma';
        break;
      }

      case '.': {
        keyPress = 'dot';
        break;
      }

      case '.': {
        keyPress = 'period';
        break;
      }


        case '|':

        case '\\':{
          keyPress = 'backslash';
          break;
        }

      case '?':
      case '/': {
        keyPress = 'qmark';
        break;
      }

      case ' ': {
        keyPress = 'space';
        break;
      }

      case '-': {
        keyPress = 'minus';
        break;
      }

      case '+':
      case '=': {
        keyPress = 'plus';
        break;
      }

      case '1': {
        keyPress = 'one';
        break;
      }

      case '2': {
        keyPress = 'two';
        break;
      }

      case '3': {
        keyPress = 'three';
        break;
      }

      case '4': {
        keyPress = 'four';
        break;
      }

      case '5': {
        keyPress = 'five';
        break;
      }

      case '6': {
        keyPress = 'six';
        break;
      }

      case '7': {
        keyPress = 'seven';
        break;
      }

      case '8': {
        keyPress = 'eight';
        break;
      }

      case '9': {
        keyPress = 'nine';
        break;
      }

      case '0': {
        keyPress = 'zero';
        break;
      }
    }

    return keyPress;
  };
}
