import { Component, Input } from '@angular/core'

@Component({
	standalone: true,
	templateUrl: './tooltip.component.html',
	selector: 'tooltip',
	styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent {
	@Input() left = 0
	@Input() text = ''
	@Input() top = 0
}