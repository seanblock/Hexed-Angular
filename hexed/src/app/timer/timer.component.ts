import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() secondsToTimer: number = 0;
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() newTimeEvent = new EventEmitter<number>();

  initial = true;

  timeChange() {
    if ((this.secondsToTimer == 0 || this.secondsToTimer == null) && this.initial) {
      this.secondsToTimer = 60;
      this.initial = false;
    }
    setTimeout(()=>{
      if(this.secondsToTimer > 0){
        this.secondsToTimer -= 1
        this.newTimeEvent.emit(this.secondsToTimer)
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