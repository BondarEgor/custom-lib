import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EyButtonDirective } from '@ey-ui/core'

@Component({
  selector: 'lib-button-preview',
  standalone: true,
  imports: [CommonModule, EyButtonDirective],
  templateUrl: './button-preview.component.html',
  styleUrl: './button-preview.component.less',
})

export class ButtonPreviewComponent {
 @Input() buttons: any
}
