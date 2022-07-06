import { Component, OnInit } from '@angular/core';
import {ChatService} from './../../services/chat-service/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  room:string="";
  text:string="";
  messageReceived:any[]=[];
  messageSend:any[]=[];

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.onPrivate().subscribe((data:any)=>{
      this.messageReceived.push(data)
      console.log(data)
    })
    
  }

  onJoin (){
    this.chatService.onJoin(this.room)
  }
  onMessage(){
    const mess={room:this.room,message:this.text}
    this.messageSend.push(this.text)
    this.chatService.onMessage(mess)
  }

}
