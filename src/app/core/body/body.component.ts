import { Component, OnInit } from '@angular/core';

import { InteractionService} from './../../services/interaction-service/interaction.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sidebar:boolean=false;

  constructor(private interactionService:InteractionService) { }

  ngOnInit(): void {

    this.interactionService.changeSidebar.subscribe(data=>{
      this.sidebar=data;
    })
  }

}
