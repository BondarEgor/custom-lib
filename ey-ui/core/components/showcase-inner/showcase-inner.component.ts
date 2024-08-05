import { ChangeDetectionStrategy, Component } from '@angular/core'
import { EyShowcaseHeaderComponent } from '../showcase-header'

@Component({
  imports: [EyShowcaseHeaderComponent],
  selector: 'ey-showcase-inner',
  templateUrl: './showcase-inner.component.html',
  styleUrl: './showcase-inner.component.less',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EyShowcaseInner { }
