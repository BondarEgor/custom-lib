import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core'
import { EyAppearance } from 'ey-ui/core/directives/appearance/appearance.directive'
import { EY_BUTTON_OPTIONS } from '../button/button.options'
import { eyWithStyles } from '../../../cdk/utils/'

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
export class MyButtonDirective implements OnInit {
  private readonly options = inject(EY_BUTTON_OPTIONS);
  private readonly renderer = inject(Renderer2)
  private readonly element = inject(ElementRef)

  @Input()
  public size = this.options.size;

  @Input()
  public icon = ''

  protected readonly nothing = eyWithStyles(EyButtonStyles);

  ngOnInit(): void {
    if (this.icon) {
      const iconElement = this.renderer.createElement('img')
      this.renderer.addClass(iconElement, 'icon')
      this.renderer.setAttribute(iconElement, 'src',this.icon)
      this.renderer.appendChild(this.element.nativeElement, iconElement)
    }
  }
}
