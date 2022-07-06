import { Component, OnInit } from '@angular/core';

import {AuthService} from './../../../services/auth-service/auth.service';
import {LocalStorageService} from './../../../services/localStorage-service/local-storage.service';
import {InteractionService} from '../../../services/interaction-service/interaction.service'

import {User} from './../../../models/user'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user!:User;

  constructor(
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private interactionService:InteractionService
    ) { }

  ngOnInit(): void {
    
    this.getUser()
    this.localStorageService.userChange.subscribe(()=>{
      this.getUser()
    })
    
  }

  async getUser(){
    this.user=await this.localStorageService.getUser()
  }

  logout(){
    this.localStorageService.clearAll()
  }

  changesidebar(){
    this.interactionService.change()
  }
  
}
