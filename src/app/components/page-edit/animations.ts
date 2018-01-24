import { trigger, state, style, animate, transition, query, animateChild } from '@angular/animations';

export const PostAnimations: any[] = [
  trigger('editTrigger', [
    state('default', style({
      flexGrow: 1
    })),
    state('edit', style({
      flexGrow: 1
    })),
    state('preview', style({
      flexGrow: 0,
      height: 0
    })),
    transition('preview => *', [
      animate('200ms ease-out')
    ]),
    transition('* <=> *', [
      query('@isVisible', animateChild(), {optional: true}),
      animate('200ms ease-out')
    ])
  ]),

  trigger('previewTrigger', [
    state('default', style({
      flexGrow: 1
    })),
    state('edit', style({
      flexGrow: 0,
      height: 0
    })),
    state('preview', style({
      flexGrow: 1
    })),
    transition('edit => *', [
      animate('200ms ease-out')
    ]),
    transition('* <=> *', [
      query('@isVisible', animateChild(), {optional: true}),
      animate('200ms ease-out')
    ])
  ]),

  trigger('isVisible', [
    state('true', style({
      opacity: 1
    })),
    state('false', style({
      opacity: 0,
      overflow: 'hidden'
    })),
    transition('* <=> *', animate('200ms ease-out'))
  ])
];
