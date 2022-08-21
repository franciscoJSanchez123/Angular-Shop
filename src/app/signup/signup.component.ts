import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth-service/auth.service';
import { InteractionService } from '../services/interaction-service/interaction.service';

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
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private interactionService:InteractionService
    ) { }

  ngOnInit(): void {
  }

  create(){
    this.authService.create(this.user).subscribe();
    this.router.navigate(['/signin'])
  }
}
