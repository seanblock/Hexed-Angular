import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() time:any = 60

  constructor() { }

  ngOnInit(): void {
  }

}
