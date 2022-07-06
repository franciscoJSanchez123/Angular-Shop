import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  onJoin(room:string){
    this.socket.emit('join', room)
  }

  onMessage( mess:any){
    this.socket.emit('message',mess)
  }

  onPrivate():Observable<string>{
    return this.socket.fromEvent('message private')
  }
}
