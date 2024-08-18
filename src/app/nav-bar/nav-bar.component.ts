import { Component, OnInit } from '@angular/core';
import {AutinticationService} from '../autintication.service';


@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  isLogin:boolean = false;

  constructor(public _AutinticationService:AutinticationService) { 

  _AutinticationService.userData.subscribe(
    data => {
      if(data){
        this.isLogin = true
      }else{
        this.isLogin = false;
      }
    } 
    )
  }
    

  ngOnInit(): void {
  }

}
