import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core'
import { EyButtonDirective, EyTabsComponent } from '@ey-ui/core'
import { UsageExampleComponent } from '../usage-example/usage-example.component'
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers'
import { Highlight } from 'ngx-highlightjs'
import { ButtonService } from '../../showcase/button/button.service'

@Component({
  selector: 'ey-doc-page',
  imports: [
    EyButtonDirective,
    CommonModule,
    UsageExampleComponent,
    HighlightLineNumbers,
    Highlight,
    EyTabsComponent
  ],
  standalone: true,
  templateUrl: './document.component.html',
  styleUrl: './document.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPageComponent {
  constructor(private buttonService: ButtonService) { }

  readonly buttonsInfo = [
    { data: this.buttonService.getButtonsList('usage') },
    { data: this.buttonService.getButtonsList('appearance') },
    { data: this.buttonService.getButtonsList('size') },
  ]

  readonly tabs = [
    'Description and Examples',
    'Setup',
    'API'
  ]
  
  @Input() showcase_header: string = ''
  activeTab: string = 'Description and Examples'

  @Output()
  setActiveTab (tab:string) {
    this.activeTab = tab
    console.log(tab)
    console.log(this.activeTab)
  }
}
