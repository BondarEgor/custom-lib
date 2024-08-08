import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { eyWithStyles } from '@ey-ui/cdk';

@Component({
  standalone: true,
  template: '',
  styleUrl: './tab.less',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyTabStyles {}

@Directive({
  selector: '[eyTab]',
  standalone: true,
  host: {
    '[class.active]': 'active',
    '[class.disabled]': 'disabled',
  },
})
export class EyTabDirectiveComponent {
  @Input() active!: boolean;
  @Input() disabled!: boolean;

  private readonly nothing = eyWithStyles(EyTabStyles);
}
