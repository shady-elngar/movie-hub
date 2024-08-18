import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AutinticationService} from '../autintication.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null , [Validators.required , Validators.email]),
    'password':new FormControl(null, Validators.pattern('^[A-Z][a-z0-9]{3,8}$'))
  })
  
  registErr:string;
  
    constructor(public _AutinticationService:AutinticationService, public _Router:Router) { }

    getFormData(formData){

      if(formData.valid == true){
  
        this._AutinticationService.logIn(formData.value).subscribe( data => 
          {
           if(data.message == 'success'){
             this._AutinticationService.saveUserData(data.user, data.token)
             this._Router.navigate(['/home'])
             console.log(data)
           }else{
             this.registErr = 'Email Or User Name is Invalid'
           }
          });
        //console.log(formData.value)
      }
    }
  
  ngOnInit(): void {
  }

}
