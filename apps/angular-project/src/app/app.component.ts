import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ContentChild, ElementRef, Renderer2, ViewChild, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CopyButtonComponent, ExpandComponent, MyButtonDirective } from '@ey-ui/core'
@Component({
  standalone: true,
  imports: [
    RouterModule,
    MyButtonDirective,
    ExpandComponent,
    CopyButtonComponent,
    CommonModule,
    FormsModule
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
