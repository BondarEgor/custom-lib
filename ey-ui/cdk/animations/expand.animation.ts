import { trigger, state, style, transition, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'expanded',
    style({
      opacity: 1,
      maxHeight: '100vh',
    }),
  ),
  state(
    'collapsed',
    style({
      opacity: 0,
      maxHeight: '0px',
    }),
  ),
  transition('expanded <=> collapsed', [animate('600ms ease-in-out')]),
]);
