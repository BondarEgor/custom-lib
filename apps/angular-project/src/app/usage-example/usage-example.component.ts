import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import {
  EyButtonDirective,
  EyShowcaseBlock,
  EyTabsComponent
} from '@ey-ui/core'
import { EyButtonAppearance, EyButtonSize } from '@ey-ui/types'
import { EyLinkStyles } from '../../../../../ey-ui/core/components/link/link.directive'

interface IEyButton {
  appearance: EyButtonAppearance
  size: EyButtonSize
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
    EyShowcaseBlock,
  ],
})
export class UsageExampleComponent {
  SHOWCASE_BUTTONS: IEyButton[] = [
    { appearance: 'flat', size: 'xs' },
    { appearance: 'orange', size: 's' },
    { appearance: 'violet', size: 'm' },
    { appearance: 'blue', size: 'l' },
    { appearance: 'outlined', size: 'xl' },
  ];

  @Input() attrName!: string
  @Input() isAppearanceNeeded = false;
  @Input() insideButtonText = 'Button';
}
