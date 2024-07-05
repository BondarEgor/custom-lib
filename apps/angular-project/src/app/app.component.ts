import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ExpandComponent, MyButtonDirective } from '@ey-ui/core'

@Component({
  standalone: true,
  imports: [RouterModule, MyButtonDirective, ExpandComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isExpanded = false
  onClick(){
    this.isExpanded = !this.isExpanded
  }
 }
