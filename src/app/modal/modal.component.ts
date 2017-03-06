import { Component, OnInit ,Input , HostBinding , HostListener ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @HostBinding('class.visible')
  @Input()
     visible = true;

  @HostListener('click')
   closeModal(){
    this.close.emit(null);
  }

  @Output()
  close = new EventEmitter<void>();

  constructor() { }

  //@Input()
  ////visible

  ngOnInit() {
  }

}
