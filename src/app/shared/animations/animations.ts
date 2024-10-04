import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animationSequentialEntry = trigger('slideInOut', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [animate('0.5s', style({ opacity: 0, transform: 'translateY(-20px)' }))],
      { optional: true }
    ),
  ]),
]);
