import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiServerUrl: string = environment.api.server;
 // private socket;
  public text: any;
  // currentDocument = this.socket.fromEvent<Document>('document');
  // documents = this.socket.fromEvent<string[]>('documents');

  constructor(private http: HttpClient, private socket: Socket) {
 // this.socket = io(this.apiServerUrl);
  // this.socket.on('foff', () => {
  //     console.log('receieved');
  //   })
   this.socket.on('foff', message => {
    console.log(message + 'received at front end');
   });
  }

  public sendMessage(message: string) {
    console.log(message);
    this.socket.emit('message', message);
  }
}
