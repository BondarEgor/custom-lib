import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { EyButtonAppearance, EyButtonShape, EyButtonSize } from '@ey-ui/types';

@Directive({
  standalone: true,
  selector: 'button[eyButton]',
})
export class MyButtonDirective implements OnInit {
  constructor(private el: ElementRef) {}
  @Input() public size: EyButtonSize = 'm';
  @Input() public appearance: EyButtonAppearance = 'secondary';
  @Input() public shape: EyButtonShape = 'rounded';
  @Input() public disabled: true | false = false;

  ngOnInit(): void {
    this.applyButtonStyles();
  }

  private applyButtonStyles() {
    const classes = [
      `ey-button--${this.size}`,
      `ey-button--${this.appearance}`,
      `ey-button-${this.shape}`,
      `ey-button${this.disabled ? '-disabled' : ''}`,
    ];

    classes.forEach((className) =>
      this.el.nativeElement.classList.add(className)
    );
  }
}
