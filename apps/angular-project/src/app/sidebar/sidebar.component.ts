import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EyAccordionItemComponent,
  EyInputComponent,
  EyLinkDirectiveComponent,
  EyExpandComponent,
} from '@ey-ui/core';

@Component({
  standalone: true,
  templateUrl: './sidebar.component.html',
  selector: 'ey-sidebar',
  styleUrl: './sidebar.component.less',
  imports: [
    EyAccordionItemComponent,
    EyExpandComponent,
    EyLinkDirectiveComponent,
    CommonModule,
    RouterModule,
    EyInputComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EySidebarComponent {
  COMPONENTS = ['button', 'tooltip', 'link', 'expand'];
}
