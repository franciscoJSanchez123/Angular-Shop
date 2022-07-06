import { Component, OnInit } from '@angular/core';
import {UserAuth} from './../models/user-auth';
import {AuthService} from './../services/auth-service/auth.service';
import {LocalStorageService} from './../services/localStorage-service/local-storage.service'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  sidebar:boolean=false;
  userAuth:UserAuth={
    username:"",
    password:""
  }
  
  constructor(
    private authService:AuthService,
    private localStorageService:LocalStorageService
    ) { }

  ngOnInit(): void {

  }

  signin(){
    return this.authService.signin(this.userAuth).subscribe(data=>{
      
      this.localStorageService.saveToken(data.access_token);
      this.profile();
      history.go(-1);
    })
  }

  profile(){
    
    this.authService.profile();
    

  }
}
