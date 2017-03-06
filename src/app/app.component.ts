import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works Emil!';
  modalVisible=false;
  videoSource;

  viewVideo(event){
    this.modalVisible=true;
    this.videoSource=event;
  }
}


