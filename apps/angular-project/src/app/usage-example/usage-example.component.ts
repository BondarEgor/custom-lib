import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EyButtonDirective, EyShowcaseBlockComponent, EyTabsComponent } from '@ey-ui/core';
import { EyButtonSize } from '@ey-ui/types';
import { EyLinkStyles } from '../../../../../ey-ui/core/components/link/link.directive';
import { EyShowcaseHeaderComponent } from '../../../../../ey-ui/core/components/showcase-header/showcase-header';

interface IShowcaseItemBtn {
  title: string;
  insideText: string;
  attrName: string;
  size: EyButtonSize;
  appearance: string;
}

@Component({
  standalone: true,
  selector: 'app-usage-example',
  templateUrl: './usage-example.component.html',
  styleUrl: './usage-example.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EyButtonDirective,
    CommonModule,
    EyTabsComponent,
    EyLinkStyles,
    EyShowcaseBlockComponent,
    EyShowcaseHeaderComponent,
  ],
})
export class UsageExampleComponent {
  @Input() showcaseItem!: any;
}
