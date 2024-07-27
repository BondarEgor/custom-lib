import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core'
import { eyWithStyles } from 'ey-ui/cdk/utils'
import { EyMode } from '@ey-ui/types'
@Component({
	standalone: true,
	template: '',
	styleUrls: ['./link.less'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class EyLinkStyles { }
@Directive({
	standalone: true,
	selector: '[eyLink]',
	host: {
		'[attr.mode]': 'mode'
	}
})

export class LinkDirective {
	@Input()
	public mode: EyMode = 'primary'

	private readonly nothing = eyWithStyles(EyLinkStyles)
}