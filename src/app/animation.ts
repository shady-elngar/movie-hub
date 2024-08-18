import { trigger, style, state, transition, animate } from '@angular/animations';

export const toggleFade = trigger('fade',[
  transition('* <=> *',[
       style({opacity:0, transform: 'translateY(50px)'}),
       animate('500ms', style({opacity:1, transform: 'translateY(0px)'})),
  ]),
]);

;








   /*state('void', style({ opacity : 0})),
     transition(':enter , :leave', animate(500))
     transition('void <=> *', animate(500))*/