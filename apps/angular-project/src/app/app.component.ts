import { CommonModule } from '@angular/common'
import { Component, Renderer2, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ButtonDirective, CopyButtonComponent, ExpandComponent, LinkDirective } from '@ey-ui/core'
@Component({
  standalone: true,
  imports: [
    RouterModule,
    ButtonDirective,
    ExpandComponent,
    CopyButtonComponent,
    CommonModule,
    FormsModule,
    LinkDirective
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  renderer = inject(Renderer2)
  isExpanded = false
  textFromInput: string = ''

  onClick() {
    this.isExpanded = !this.isExpanded
  }

  copyIcon = '/custom-lib/ey-ui/cdk/assets/link.svg'
}
