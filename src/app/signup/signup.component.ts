import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User={
    name:"",
    password:"",
    email:"",
    ordersId:[],
    admin:false
  }
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  create(){
    this.authService.create(this.user).subscribe();
    history.go(-1);
  }
}
