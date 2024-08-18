import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import {userData} from './userData'

@Injectable({
  providedIn: 'root'
})
export class AutinticationService {

  constructor(public _HttpClient:HttpClient) { }

  userData = new BehaviorSubject(null);

  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup' ,data)
  }
  
 logIn(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin' ,data)
  }

  saveUserData(user, token){
    let User = new userData(user.first_name, user.last_name, user.email, token)
    this.userData.next(User);

  }

}

