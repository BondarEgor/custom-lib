import { Component, Input } from '@angular/core';
import { EyTabsComponent } from '../tabs';
import { CommonModule } from '@angular/common';
import { EyShowcaseInner } from '../showcase-inner/showcase-inner.component';

@Component({
  imports: [EyTabsComponent, CommonModule, EyShowcaseInner],
  selector: 'ey-showcase-block',
  standalone: true,
  templateUrl: './showcase-block.component.html',
  styleUrl: './showcase-block.component.less',
})
export class EyShowcaseBlock {
  @Input() attribute = '';
}
