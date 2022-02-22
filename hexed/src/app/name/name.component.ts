import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Output() btnClick = new EventEmitter()
  @Output() timer = new EventEmitter()
  @Output() initials = new EventEmitter()
  @Input() gameStatus:any

  time:any
  name:any

  input_time :number;

  fever = new Audio('../assets/fever.mp3');
  
  

  onClick() {
    this.initials.emit(this.name)
    this.timer.emit(this.input_time)
    this.btnClick.emit()
  }

  onTimer(event: KeyboardEvent) { // with type info
    this.time += (event.target as HTMLInputElement).value;
  }

  userName(event: KeyboardEvent) { // with type info
    this.name += (event.target as HTMLInputElement).value;
  }

  
  constructor() { 
 
  }

  ngOnInit(): void {

  }

}
