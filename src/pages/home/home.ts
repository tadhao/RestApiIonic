import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TryServiceProvider } from '../../providers/try-service/try-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messageList=[];

  constructor(public navCtrl: NavController, private tryService: TryServiceProvider) {
   this.getMessage();
  }

  getMessage(){
    this.tryService.myUrlCall().subscribe(data=> this.messageList=data);
  }

}
