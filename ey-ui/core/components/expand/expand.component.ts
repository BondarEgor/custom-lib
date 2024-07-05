import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.less'],
  standalone: true,
  selector: 'ey-expand',
  imports: [CommonModule],
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        opacity: 1,
        maxHeight: '1000px',
      })),
      state('collapsed', style({
        opacity: 0,
        maxHeight: '0px',
      })),
      transition('expanded <=> collapsed', [
        animate('600ms ease-in-out')
      ])
    ])
  ]
})

export class ExpandComponent {
  @Input() expanded = false;
}
