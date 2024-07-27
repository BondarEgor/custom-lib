import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core'
import { EyAppearance } from 'ey-ui/core/directives/appearance/appearance.directive'
import { eyWithStyles } from '@ey-ui/cdk'
import { EY_BUTTON_OPTIONS } from '../button/button.options'

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
export class EyButtonStyles { }

@Directive({
  standalone: true,
  selector: 'button[eyButton]',
  hostDirectives: [
    {
      directive: EyAppearance,
      inputs: [
        'eyAppearance : appearance',
        'eyAppearanceState',
        'eyAppearanceFocus',
      ],
    },
  ],
  host: {
    '[attr.data-size]': 'size',
  },
})
export class ButtonDirective {
  private readonly options = inject(EY_BUTTON_OPTIONS);
  private readonly renderer = inject(Renderer2)
  private readonly element = inject(ElementRef)

  @Input()
  public size = this.options.size;
  private _icon = ''

  @Input()
  set icon(newIcon: string) {
    this._icon = newIcon
    this.updateIcon()
  }

  updateIcon() {
    const iconElement = this.renderer.createElement('img')
    this.renderer.addClass(iconElement, 'icon')
    this.renderer.setAttribute(iconElement, 'src', this._icon)
    this.renderer.appendChild(this.element.nativeElement, iconElement)
  }

  protected readonly nothing = eyWithStyles(EyButtonStyles);
}
