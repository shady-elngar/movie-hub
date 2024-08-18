import { Component } from '@angular/core';
import { toggleFade } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[toggleFade]
 
})
export class AppComponent {
  title = 'moviesHub';
 
  isVisible:boolean;

  constructor () {

    this.isVisible = true;

  }

}
