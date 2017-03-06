import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import {Video} from "../ExportVideo";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  constructor() { }

  @Input()
  video:Video;

  @Output()
  watchVideo = new EventEmitter();
  onClick(event:MouseEvent){
    this.watchVideo.emit(this.video.source)
  }

  ngOnInit() {
  }

}
