import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { EyButtonDirective } from '@ey-ui/core'
import { UsageExampleComponent } from '../usage-example/usage-example.component'

@Component({
  selector: 'ey-doc-page',
  imports: [EyButtonDirective, CommonModule, UsageExampleComponent],
  standalone: true,
  templateUrl: './document.component.html',
  styleUrl: './document.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPageComponent {
  ATTRIBUTES_LIST = [
    { title: 'Usage', isAppearanceNeeded: false, insideText: 'Button' },
    { title: 'Appearance', isAppearanceNeeded: true, insideText: 'Color' },
    { title: 'Size', isAppearanceNeeded: false, insideText: 'Size' },
  ];
}
