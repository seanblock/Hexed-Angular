import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() secondsToTimer: number = 0;
  @Input() end = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() newTimeEvent = new EventEmitter<number>();
  initial = true;
  @Input() set gameStatus(value: boolean) {
    if(!value) {
      this.initial = true;
      this.timeChange();
    }
  }
  
  timeChange() {
    if ((this.secondsToTimer == 0 || this.secondsToTimer == null) && this.initial) {
      this.secondsToTimer = 60;
      this.initial = false;
    }
    var timer = setTimeout(()=>{
      if(this.secondsToTimer > 0 && !this.end){
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
  }

}