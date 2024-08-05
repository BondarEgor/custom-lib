import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'ey-showcase-header',
  standalone: true,
  templateUrl: './showcase-header.html',
  styleUrl: './showcase-header.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyShowcaseHeaderComponent {
  @Input() attributeName = '';
}
