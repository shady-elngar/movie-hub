import {Component, OnInit } from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AutinticationService} from '../autintication.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

resgisterForm:FormGroup = new FormGroup({
  'first_name':new FormControl(null, [Validators.required ,Validators.minLength(3), Validators.maxLength(10)] ),
  'last_name':new FormControl(null, [Validators.required ,Validators.minLength(3), Validators.maxLength(10)] ),
  'age':new FormControl(null, [Validators.required ,Validators.min(16), Validators.max(60)] ),
  'email':new FormControl(null , [Validators.required , Validators.email]),
  'password':new FormControl(null, Validators.pattern('^[A-Z][a-z0-9]{3,8}$'))
})

registErr:string;

  constructor(public _AutinticationService:AutinticationService, public _Router:Router) { }

  ngOnInit(): void {
  }

  getFormData(formData){

    if(formData.valid == true){

      this._AutinticationService.signUp(formData.value).subscribe( data => 
        {
         if(data.message == 'success'){
           this._Router.navigate(['/login'])
         }else{
           this.registErr = 'This Email Already Registered'
         }
        });
      //console.log(formData.value)
    }
  }

}
