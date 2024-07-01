import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ey-button-group',
  templateUrl: './button.group.component.html',
  styleUrls: ['./button.group.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() direction: 'row' | 'col' = 'row';
  @Input() justify: 'start' | 'end' | 'center' | 'space' = 'start';
  @Input() gap: 's' | 'm' | 'l' | 'xl' = 's';

  ngOnInit(): void {
    this.addStyles();
  }

  addStyles() {
    this.renderer.addClass(this.el.nativeElement, `ey-button-group`);
    this.renderer.addClass(
      this.el.nativeElement,
      `ey-direction-${this.direction}`,
    );
    this.renderer.addClass(this.el.nativeElement, `ey-justify-${this.justify}`);
    this.renderer.addClass(this.el.nativeElement, `ey-gap-${this.gap}`);
  }
}
