import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[eyTooltip]',
  standalone: true,
  host: {},
})
export class TooltipDirective {
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document,
    private appRef: ApplicationRef,
  ) {}

  @Input() eyTooltip = '';
  private tooltipComponent?: ComponentRef<any>;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipComponent) {
      return;
    }

    const tooltipComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);

    this.tooltipComponent = tooltipComponentFactory.create(this.injector);

    this.document.body.appendChild(this.tooltipComponent.location.nativeElement);

    this.setTooltipComponentProperties();
    this.tooltipComponent.hostView.detectChanges();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.tooltipComponent) {
      return;
    }

    this.appRef.detachView(this.tooltipComponent.hostView);
    this.tooltipComponent.destroy();
    this.tooltipComponent = undefined;
  }

  private setTooltipComponentProperties() {
    if (!this.tooltipComponent) {
      return;
    }

    this.tooltipComponent.instance.text = this.eyTooltip;
    const { left, right, bottom } = this.el.nativeElement.getBoundingClientRect();

    this.tooltipComponent.instance.left = (right - left) / 2 + left;
    this.tooltipComponent.instance.top = bottom;
  }
}
