import { Component } from '@angular/core'
import { EyShowcaseHeaderComponent } from '../showcase-header'

@Component({
  imports: [EyShowcaseHeaderComponent],
  selector: 'ey-showcase-inner',
  templateUrl: './showcase-inner.component.html',
  styleUrl: './showcase-inner.component.less',
  standalone: true,
})
export class EyShowcaseInner { }
