import { Component } from '@angular/core'
import { AccordionItemComponent, LinkDirective } from '@ey-ui/core'
import { ExpandComponent } from "../../../../../ey-ui/core/components/expand/expand.component"
import { CommonModule } from '@angular/common'

@Component({
	standalone: true,
	templateUrl: './sidebar.component.html',
	selector: 'ey-sidebar',
	styleUrls: ['./sidebar.component.less'],
	imports: [
		AccordionItemComponent,
		ExpandComponent,
		LinkDirective,
		CommonModule
	]
})

export class EySidebarComponent {
	COMPONENTS = [
'button',
'tooltip',
'link',
'expand',
	]
}