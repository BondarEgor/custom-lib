import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyButtonDirective } from '@ey-ui/core';

@Component({
  selector: 'lib-button-less',
  standalone: true,
  imports: [CommonModule, EyButtonDirective],
  templateUrl: './button-less.component.html',
  styleUrl: './button-less.component.less',
})
export class ButtonLessComponent {
  @Input() less = ''
}
