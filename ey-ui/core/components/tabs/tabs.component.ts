import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkDirective } from '../link';
import { EyTabDirective } from '../tab/tab.directive';

@Component({
  selector: 'ey-tabs',
  imports: [LinkDirective, CommonModule, EyTabDirective],
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyTabsComponent {
  TABS = ['Preview', 'Typescript', 'HTML', 'less'];

  activeTab = this.TABS[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
