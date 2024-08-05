import { Component } from '@angular/core';
import {
  AccordionItemComponent,
  InputComponent,
  LinkDirective,
} from '@ey-ui/core';
import { ExpandComponent } from '../../../../../ey-ui/core/components/expand/expand.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './sidebar.component.html',
  selector: 'ey-sidebar',
  styleUrl: './sidebar.component.less',
  imports: [
    AccordionItemComponent,
    ExpandComponent,
    LinkDirective,
    CommonModule,
    RouterModule,
    InputComponent,
  ],
})
export class EySidebarComponent {
  COMPONENTS = ['button', 'tooltip', 'link', 'expand'];
}
