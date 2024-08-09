import { AfterViewChecked, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightAuto, Highlight } from 'ngx-highlightjs'

@Component({
  selector: 'lib-button-ts',
  standalone: true,
  imports: [
    CommonModule,
    HighlightAuto,
    Highlight],
  templateUrl: './button-ts.component.html',
  styleUrl: './button-ts.component.less',
})
export class ButtonTsComponent {

  @Input() code = ''
}
