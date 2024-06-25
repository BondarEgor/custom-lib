import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyButtonDirective } from 'my-ui-lib/src/lib/button/button.directive';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyButtonDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
