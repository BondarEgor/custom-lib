import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonService } from '../button.service';
import { EyButtonDirective } from '@ey-ui/core';

@Component({
  selector: 'lib-button-preview',
  standalone: true,
  imports: [CommonModule, EyButtonDirective],
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.css',
})
export class ButtonPreviewComponent {
  constructor(private buttonService: ButtonService) {}

  readonly buttons = this.buttonService.getButtonsList('usage');
}
