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
  @Input() time = '60';
  name: string = '';

  fever = new Audio('../assets/fever.mp3');
  
  onClick() {
    if(this.name != '') {
      this.initials.emit(this.name)
      this.timer.emit(this.time)
      this.btnClick.emit()
    } else {
      alert("Please enter initals");
    }
    
  }
  // parsing timing value from input to int
  onTimer(value: string) { // with type info
    if(parseInt(value) > 0) {
      this.time = value;
    }
  }
  // obtaining user initials
  userName(value: string) { // with type info
    this.name = value;
  }


  constructor() { 
 
  }

  ngOnInit(): void {

  }

}
