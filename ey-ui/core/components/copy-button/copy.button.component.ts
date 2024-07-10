import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { ClipboardService } from 'ngx-clipboard'
import { ButtonDirective } from '../button'

@Component({
	standalone: true,
	templateUrl: './copy.button.component.html',
	styleUrls: ['./copy.button.component.less'],
	selector: 'ey-copy-button',
	host: {
		'(click)': 'onCopy()',
	},
	imports: [
		ButtonDirective,
	]
})

export class CopyButtonComponent {
	constructor(private clipboard: ClipboardService) { }

	readonly copyIcon = '/copy.svg'
	@ViewChild('tooltip') tooltip!: ElementRef

	@Input()
	public textToCopy!: string

	onCopy() {
		this.clipboard.copy(this.textToCopy)
		this.tooltip.nativeElement.textContent = 'Скопировано'

		setTimeout(() => {
			this.tooltip.nativeElement.textContent = 'Копировать'
		}, 2000)
	}
}