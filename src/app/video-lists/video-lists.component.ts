import { Component, OnInit, EventEmitter ,Output } from '@angular/core';
import {VideosService} from "../videos.service";

@Component({
  selector: 'app-video-lists',
  templateUrl: './video-lists.component.html',
  styleUrls: ['./video-lists.component.css']
})
export class VideoListsComponent implements OnInit {

  constructor(private videoList:VideosService) { }

  ngOnInit() {
  }

  @Output()
  watchVideo = new EventEmitter();
  onWatchVideo(source:string){
   this.watchVideo.emit(source)
  }

}
