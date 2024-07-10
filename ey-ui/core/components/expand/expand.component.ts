import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { expandCollapse } from '../../../cdk/animations'
@Component({
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.less'],
  standalone: true,
  selector: 'ey-expand',
  animations: [expandCollapse],
})

export class ExpandComponent implements OnChanges {
  @Input() expanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expanded']) {
      this.expanded = changes['expanded'].currentValue
    }
  }
}
