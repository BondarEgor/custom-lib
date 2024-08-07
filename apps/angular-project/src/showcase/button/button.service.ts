import { Injectable } from '@angular/core'
import { ATTRIBUTES_LIST } from './constants'
interface IButtonFields {
	insideText: string
	appearance: string
	size: string
	disabled?: undefined
}

interface IButtonArray {
	title: string
	attrName: string
	buttons: IButtonFields
}
@Injectable({
	providedIn: 'root'
})

export class ButtonService {

	getButtonsList(attr_name: string){
		const attribute = ATTRIBUTES_LIST.find(item => item.title === attr_name)

		return attribute ? attribute.buttons : null
	}

	getAttributeNames() {
		return ATTRIBUTES_LIST.map(button => button.attrName)
	}


	getAttributeTitles() {
		return ATTRIBUTES_LIST.map(button => button.title)
	}

}