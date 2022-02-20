import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Output() btnClick = new EventEmitter()
  @Input() gameStatus:any


  fever = new Audio('../assets/fever.mp3');
  
  onClick() {
    this.btnClick.emit()
  }


  constructor() { 
 
  }

  ngOnInit(): void {

  }

}
