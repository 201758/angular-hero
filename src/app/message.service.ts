import { Injectable } from '@angular/core';
import { tap, catchError, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[]=[];
  add(message:string){
    this.messages.push(message);
    setTimeout(()=>{console.log(),1000});
  }

  clear(){
    this.messages=[];
  }
}
