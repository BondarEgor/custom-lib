import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { EyTabDirectiveComponent } from '../../directives/tab/tab.directive';
import { EyLinkDirectiveComponent } from '../link';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ey-tabs',
  imports: [EyLinkDirectiveComponent, CommonModule, EyTabDirectiveComponent],
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyTabsComponent {
  readonly TABS = ['PREVIEW', 'TYPESCRIPT', 'HTML', 'LESS'];

  activeTab = this.TABS[0];

  @Output() tabChange = new EventEmitter<string>();

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
