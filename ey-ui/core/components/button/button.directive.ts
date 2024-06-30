import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { EyAppearance } from 'ey-ui/core/directives/appearance/appearance.directive';
import { EY_BUTTON_OPTIONS } from '../button/button.options';
import { eyWithStyles } from '../../../cdk/utils/';

@Component({
  standalone: true,
  template: '',
  styleUrls: ['./button.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ey-button',
  },
})
export class EyButtonStyles {}

@Directive({
  standalone: true,
  selector: 'button[eyButton]',
  hostDirectives: [
    {
      directive: EyAppearance,
      inputs: ['eyAppearance : appearance'],
    },
  ],
  host: {
    '[attr.data-size]': 'size',
  },
})
export class MyButtonDirective {
  private readonly options = inject(EY_BUTTON_OPTIONS);

  @Input()
  public size = this.options.size;

  protected readonly nothing = eyWithStyles(EyButtonStyles);
}
