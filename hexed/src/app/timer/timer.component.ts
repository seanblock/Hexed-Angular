import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() secondsToTimer: number;
  @Output() newItemEvent = new EventEmitter<boolean>();

  timeChange() {
    if (this.secondsToTimer == 0 || this.secondsToTimer == null) {
      this.secondsToTimer = 60;
    }
    setTimeout(()=>{
      if(this.secondsToTimer > 0){
        this.secondsToTimer -= 1
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
