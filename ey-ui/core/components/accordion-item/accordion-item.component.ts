import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ButtonDirective } from '../button'
import { ExpandComponent } from '../expand'

@Component({
	templateUrl: './accordion-item.component.html',
	styleUrl: './accordion-item.component.less',
	standalone: true,
	imports: [
		ButtonDirective,
		ExpandComponent
	],
	selector: 'ey-accordion-item'
})

export class AccordionItemComponent implements OnChanges {
	@Input() title: string = ''
	@Input() expanded: boolean = false

	ngOnChanges(changes: SimpleChanges) {
		if(changes['expanded']){
			console.log('whastup')
			this.expanded = changes['expanded'].currentValue
		}
	}

	toggle() {
		this.expanded = !this.expanded
	}
}