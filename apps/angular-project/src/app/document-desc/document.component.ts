import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonDirective } from '@ey-ui/core'
import { EyButtonAppearance, EyButtonSize } from '@ey-ui/types'

interface IEyButton {
	appearance: EyButtonAppearance,
	size: EyButtonSize
}

@Component({
	selector: 'ey-doc-page',
	imports: [ButtonDirective, CommonModule],
	standalone: true,
	templateUrl: './document.component.html',
	styleUrl: './document.component.less',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentPageComponent {
	
	
	SHOWCASE_BUTTONS: IEyButton[] = [
		{ appearance: 'orange', size: 's' },
		{ appearance: 'violet', size: 'm' },
		{ appearance: 'blue', size: 'l' },
		{ appearance: 'outlined', size: 'xl' },
		{ appearance: 'flat', size: 'xl' },
	]
}