import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyButtonDirective } from 'my-ui-lib/src/lib/button/button.directive';
import { ButtonGroupComponent } from '../../../../my-ui-lib/src/lib/buttonGroup/button-group.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MyButtonDirective,
    ButtonGroupComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
