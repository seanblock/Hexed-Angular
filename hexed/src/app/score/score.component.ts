import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css', '../app.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() time = 0;
  @Input() remaining = 0;
  @Input() target: Array<number> = [];
  @Input() myColor: Array<number> = [];
  @Input() set end(value: boolean) {
    if(value == true) {
      this.getScore();
    }
  };
  score = 0;
  topTen:Array<number> = [];

  constructor() { }

  getScore() {
    console.log(this.remaining);
    console.log(this.time)
    console.log("score")
    this.score = (255 - Math.abs(this.target[0] - this.myColor[0])) + (255 - Math.abs(this.target[1] - this.myColor[1])) + (255 - Math.abs(this.target[2] - this.myColor[2])) * Math.floor(this.remaining) * (1000 * (101 - this.time));
    console.log(this.score);
    this.topTenFunc();
  }

  topTenFunc() {
    this.topTen.push(this.score);
    this.topTen.sort(function(a, b) {
      return b - a;
    });

    if(this.topTen.length > 10) {
      this.topTen.pop();
    }

  }

  ngOnInit(): void {
    
  }

}
