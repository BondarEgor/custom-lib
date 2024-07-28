import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
	standalone: true,
	selector: 'ey-input',
	templateUrl: './input.component.html',
	styleUrl: './input.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent {

	@Input() placeholder: string = ''
	@Input() icon: string = ''
	@Input() iconAlign: string = ''

}