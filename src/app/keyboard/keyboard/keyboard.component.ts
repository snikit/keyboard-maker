import { KeyboardService } from './keyboard.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardComponent implements OnInit, AfterViewInit {
  @ViewChild('keyboardContainer')
  container: ElementRef<HTMLElement>;
  private keyboardService: KeyboardService;

  ngAfterViewInit(): void {
    this.keyboardService = new KeyboardService(this.container.nativeElement);
    this.keyboardService.animate();
  }

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  keyupEvent(event: KeyboardEvent) {
    this.keyboardService.keyup(event.key.toLowerCase());
  }

  @HostListener('window:keydown', ['$event'])
  keydownEvent(event: KeyboardEvent) {
    this.keyboardService.keydown(event.key.toLowerCase());
  }




}
