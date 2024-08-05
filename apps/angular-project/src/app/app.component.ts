import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  inject,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import {
  EyAccordionItemComponent,
  EyButtonDirective,
  EyCopyButtonComponent,
  EyExpandComponent,
  EyLinkDirectiveComponent,
  TooltipDirective,
} from '@ey-ui/core'
import { DocumentPageComponent } from './document-desc/document.component'
import { EyHeaderComponent } from './header/header.component'
import { EySidebarComponent } from './sidebar/sidebar.component'

@Component({
  standalone: true,
  imports: [
    RouterModule,
    EyButtonDirective,
    EyExpandComponent,
    EyCopyButtonComponent,
    CommonModule,
    FormsModule,
    EyLinkDirectiveComponent,
    TooltipDirective,
    EySidebarComponent,
    EyHeaderComponent,
    EyAccordionItemComponent,
    DocumentPageComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  renderer = inject(Renderer2);
  isExpanded = false;
  textFromInput = '';

  onClick() {
    this.isExpanded = !this.isExpanded
  }

  copyIcon = '/custom-lib/ey-ui/cdk/assets/link.svg';
}
