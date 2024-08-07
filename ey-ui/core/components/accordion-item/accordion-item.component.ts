import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EyButtonDirective } from '../button';
import { EyExpandComponent } from '../expand';

@Component({
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.less',
  standalone: true,
  imports: [EyButtonDirective, EyExpandComponent],
  selector: 'ey-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyAccordionItemComponent implements OnChanges {
  @Input() title = '';
  @Input() expanded = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['expanded']) {
      console.log('whastup');
      this.expanded = changes['expanded'].currentValue;
    }
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
