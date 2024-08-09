import { Component, input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Input } from '@angular/core'
@Component({
  selector: 'lib-button-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-html.component.html',
  styleUrl: './button-html.component.less',
})
export class ButtonHtmlComponent {
  @Input() html = ''
}
