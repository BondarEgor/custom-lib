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
  readonly ATTRIBUTES_LIST = [
    {
      title: 'Usage',
      attrName: '[eyButton]',
      buttons: [
        { insideText: 'Button', appearance: 'primary', size: 'l' },
        { insideText: 'Disabled', appearance: 'primary', size: 'l', disabled: true },
        { insideText: 'Disabled', appearance: 'primary', size: 'l', disabled: true },
        { insideText: 'Disabled', appearance: 'primary', size: 'l', disabled: true },
        { insideText: 'Disabled', appearance: 'primary', size: 'l', disabled: true },
      ],
    },
    {
      title: 'Appearance',
      attrName: '[appearance]',
      buttons: [
        { insideText: 'orange', appearance: 'orange', size: 'l' },
        { insideText: 'violet', appearance: 'violet', size: 'l' },
        { insideText: 'blue', appearance: 'blue', size: 'l' },
        { insideText: 'flat', appearance: 'flat', size: 'l' },
        { insideText: 'outlined', appearance: 'outlined', size: 'l' },
      ],
    },
    {
      title: 'Size',
      attrName: '[size]',
      buttons: [
        { insideText: 'SIZE_XS', appearance: 'primary', size: 'xs' },
        { insideText: 'SIZE_S', appearance: 'primary', size: 's' },
        { insideText: 'SIZE_M', appearance: 'primary', size: 'm' },
        { insideText: 'SIZE_L', appearance: 'primary', size: 'l' },
        { insideText: 'SIZE_XL', appearance: 'primary', size: 'xl' },
      ],
    },
  ];
}
