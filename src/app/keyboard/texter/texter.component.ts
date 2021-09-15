import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-texter',
  templateUrl: './texter.component.html',
  styleUrls: ['./texter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TexterComponent implements OnInit {
  @Input() props: any = {
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

  propNames = ['left', 'right', 'top', 'bottom'];

  sliderOptions = {
    floor: 0,
    ceil: 20,
  };

  radiusSliderOptions = {
    floor: 0,
    ceil: 100,
  };

  constructor() {}

  ngOnInit(): void {}

  propChange() {
    console.log(this.props);
    // @ts-ignore
    document.querySelector('.keyboard').style.cssText = this.getCssProps();
  }

  getCssProps() {
    let cssProp = '';

    this.propNames.forEach((i) => {
      cssProp += `--key_shadow_${i}: ${
        this.props.color[i] ? this.props.color[i] : '#000'
      }; --key_border_${i}: ${
        this.props.border[i] ? this.props.border[i] : 0
      }px;`;
    });

    cssProp +=`--key_radius: ${this.props.border.radius}px;`
    cssProp +=`--key_press: ${this.props.color.active};`



    return cssProp;
  }
}
