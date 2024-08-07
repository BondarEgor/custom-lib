import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { EyShowcaseHeaderComponent } from '../showcase-header'
import { EyShowcaseInner } from '../showcase-inner/showcase-inner.component'
import { EyTabsComponent } from '../tabs'
import { ButtonTsComponent, ButtonLessComponent, ButtonPreviewComponent, ButtonHtmlComponent } from "../../../../apps/angular-project/src/showcase/button/"

@Component({
  imports: [EyTabsComponent, CommonModule, EyShowcaseInner, EyShowcaseHeaderComponent, ButtonHtmlComponent, ButtonLessComponent, EyTabsComponent, ButtonTsComponent, ButtonPreviewComponent],
  selector: 'ey-showcase-block',
  standalone: true,
  templateUrl: './showcase-block.component.html',
  styleUrl: './showcase-block.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyShowcaseBlockComponent {
  @Input() attribute = '';

  activeTab: string = 'PREVIEW'

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}
