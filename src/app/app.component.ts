import { Component } from '@angular/core';
import { KEYBOARD_TEMPLATE } from './keyboard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keyboarder';
  props: any = {
    border: {
      left: '4',
      right: '4',
      top: '8',
      bottom: '2',
      radius : '20'
    },
    color: {
      left: '#c9c9c9',
      right: '#c9c9c9',
      top: '#5f5f5f',
      bottom: '#c9c9c9',
      active: '#FFD55E'
    },
  };


  downloadBoard(){
    let keyboard = KEYBOARD_TEMPLATE
    .replace('__key_shadow_left__',this.props.color.left)
    .replace('__key_shadow_right__',this.props.color.right)
    .replace('__key_shadow_top__',this.props.color.top)
    .replace('__key_shadow_bottom__',this.props.color.bottom)
    .replace('__key_border_left__',this.props.border.left +'px')
    .replace('__key_border_right__',this.props.border.right +'px')
    .replace('__key_border_top__',this.props.border.top +'px')
    .replace('__key_border_bottom__',this.props.border.bottom +'px')
    .replace('__key_press__',this.props.border.active)
    .replace('__key_radius__',this.props.border.radius +'px');


    const a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob([keyboard], { type: 'text/csv' });


    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'keyboard.html';
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0)


  }

}
