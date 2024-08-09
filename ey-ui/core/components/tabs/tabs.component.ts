import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core'
import { EyTabDirectiveComponent } from '../../directives/tab/tab.directive'
import { EyLinkDirectiveComponent } from '../link'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'ey-tabs',
  imports: [EyLinkDirectiveComponent, CommonModule, EyTabDirectiveComponent],
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyTabsComponent implements OnInit {
  @Input() tabs: string[] = []
  activeTab: string = '';

  @Output() tabChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.activeTab = this.tabs[0]
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab
    this.tabChange.emit(tab)
  }
}
