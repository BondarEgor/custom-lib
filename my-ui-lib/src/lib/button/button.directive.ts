import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  template: '',
  styleUrls: ['./button.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyButtonStyle {}

@Directive({
  standalone: true,
  selector: '[eyButton]',
  host: {
    class: 'ey-button',
  },
})
export class MyButtonDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input() size: 's' | 'm' | 'l' | 'xl' = 'm';
  @Input() appearance: 'primary' | 'secondary' | 'destructive' = 'secondary';
  @Input() shape: null | 'rounded' | 'square' = null
  ngOnInit(): void {
    this.setButtonStyles();
  }

  setButtonStyles() {
    this.renderer.addClass(this.el.nativeElement, `ey-button--${this.size}`);
    this.renderer.addClass(
      this.el.nativeElement,
      `ey-button--${this.appearance}`
    );
    this.renderer.addClass(this.el.nativeElement, `ey-button-${this.shape}`)
  }
}
