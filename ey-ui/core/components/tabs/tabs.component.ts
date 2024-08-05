import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { EyTabDirectiveComponent } from '../../directives/tab/tab.directive'
import { EyLinkDirectiveComponent } from '../link'

@Component({
  selector: 'ey-tabs',
  imports: [
    EyLinkDirectiveComponent, CommonModule, EyTabDirectiveComponent],
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyTabsComponent {
  TABS = ['Preview', 'Typescript', 'HTML', 'less'];

  activeTab = this.TABS[0];

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}
