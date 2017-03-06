


import { Component, OnInit, Input } from '@angular/core';
import {VideosService} from "../videos.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})




export class LogoComponent implements OnInit {
  src:string;



  @Input()
  width:'small' | 'medium' | 'large';

  sizes = new Map<string , number > ([ ['small',100],['medium',200],['large',2300]]);
  size:number;




    constructor(private videoService:VideosService) {
      console.log(videoService)
    }




  ngOnInit() {
   this.size = this.sizes.get(this.width)
  }

}
