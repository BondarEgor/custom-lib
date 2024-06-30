import { Directive, Input, inject } from '@angular/core';
import { EY_APPEARANCE_OPTIONS } from './appearance.options';
import { EyAppearanceState } from '@ey-ui/core';

@Directive({
  standalone: true,
  selector: '[eyAppearance]',
  host: {
    eyAppearance: '',
    '[attr.data-appearance]': 'eyAppearance',
    '[attr.data-state]': 'eyAppearanceState',
    '[attr.data-focus]': 'eyAppearanceFocus',
  },
})
export class EyAppearance {
  @Input()
  public eyAppearance = inject(EY_APPEARANCE_OPTIONS).appearance;

  @Input()
  public eyAppearanceState: EyAppearanceState | null = null;

  @Input()
  public eyAppearanceFocus: boolean | null = null;
}
