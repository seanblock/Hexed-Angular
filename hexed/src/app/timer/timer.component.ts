import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() time:any = 60
  @Output() newItemEvent = new EventEmitter<boolean>();

  timeChange() {
    setTimeout(()=>{
      if(this.time > 0){
        this.time -= 1
        this.timeChange()
      } else {
        this.newItemEvent.emit(false);
      }
    }, 1000)
  }

  
  constructor() { }

  ngOnInit(): void {
    this.timeChange()
  }

}
