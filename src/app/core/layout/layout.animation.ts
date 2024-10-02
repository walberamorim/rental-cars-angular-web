import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const TOOGLE_SIDEBAR = [
  trigger('toogleSidebar', [
    state(
      'open',
      style({
        left: 0,
      })
    ),
    state(
      'closed',
      style({
        width: '3rem',
      })
    ),
    transition('open <=> closed', animate('250ms ease-in-out')),
  ]),

  trigger('toogleContent', [
    state(
      'open',
      style({
        marginLeft: '16rem',
      })
    ),
    state(
      'closed',
      style({
        marginLeft: '3rem',
      })
    ),
    transition('open <=> closed', animate('250ms ease-in-out')),
  ]),

  trigger('toogleLabels', [
    state(
      'open',
      style({
        visibility: 'visible',
      })
    ),
    state(
      'closed',
      style({
        visibility: 'hidden',
      })
    ),
    transition('open <=> closed', animate('250ms ease-in-out')),
  ]),

  trigger('toogleMenuItems', [
    state(
      'open',
      style({
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        paddingRight: '1rem',
        paddingLeft: '1.5rem',
      })
    ),
    state(
      'closed',
      style({
        width: '3rem',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
      })
    ),
    transition('open <=> closed', animate('250ms ease-in-out')),
  ]),
];
