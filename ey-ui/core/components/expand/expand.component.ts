import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { expandCollapse } from '@ey-ui/cdk'
@Component({
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.less'],
  standalone: true,
  selector: 'ey-expand',
  animations: [expandCollapse],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyExpandComponent implements OnChanges {
  @Input() expanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expanded']) {
      this.expanded = changes['expanded'].currentValue
    }
  }
}
