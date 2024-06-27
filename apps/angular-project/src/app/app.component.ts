import { ButtonGroupComponent } from '@ey-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyButtonDirective } from '@ey-ui/core';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MyButtonDirective,
    ButtonGroupComponent,],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
