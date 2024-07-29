import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ButtonDirective } from '@ey-ui/core'
import { EyButtonAppearance, EyButtonSize } from '@ey-ui/types'

interface IEyButton {
	appearance: EyButtonAppearance,
	size: EyButtonSize
}

@Component({
	standalone: true,
	selector: 'app-usage-example',
	templateUrl: './usage-example.component.html',
	styleUrl: './usage-example.component.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		ButtonDirective,
		CommonModule
	]
})

export class UsageExampleComponent {

	SHOWCASE_BUTTONS: IEyButton[] = [
		{ appearance: 'orange', size: 's' },
		{ appearance: 'violet', size: 'm' },
		{ appearance: 'blue', size: 'l' },
		{ appearance: 'outlined', size: 'xl' },
		{ appearance: 'flat', size: 'xl' },
	]

	@Input() attrTitle!: string
	@Input() attrName!: string
	@Input() isAppearanceNeeded: boolean = false
	@Input() insideButtonText: string = 'Button'
}