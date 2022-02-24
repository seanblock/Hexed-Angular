import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() colors = ['red', 'green', 'blue'];
  @Input() gameStatus = true
  @Input() settingStatus = false
  secondsToTimer: number;
  end: boolean;
  randomColor: Array<number>;
  myColor: Array<number>;
  myRgb: string;
  timeLeft: number;
  title: string;

  fever = new Audio('../assets/fever.mp3');
  win = new Audio('../assets/win.mp3');

  constructor() {
    this.secondsToTimer = 0;
    this.end = false;
    this.randomColor = [];
    this.myColor = [50, 50, 50];
    this.myRgb = "";
    this.timeLeft = 0;
    this.title = 'hexed';
  }
  
  sendToTimer(data: any) {
    this.secondsToTimer = parseInt(data);
    console.log(this.secondsToTimer)
  }

  newGame() {
    
    this.startGame()
  }

  restart() {
    this.gameStatus = true
  }

  startGame() {
    console.log("Game Started")
    this.win.currentTime = 0
    this.win.pause()
    this.fever.play()
    this.gameStatus = false
  }

  guess() {
    console.log("Game Ended")
    this.fever.currentTime = 0
    this.fever.pause()
    this.win.play()
    // this.gameStatus = true
    this.end = true;
  }


  randColor(data: Array<number>) {
    for(const x of data) {
      this.randomColor.push(x);
    }
    console.log(this.randomColor);
  }

  colorGet(data: any) {
    this.myColor[data.num] = parseInt(data.value);
    this.myRgb = "rgb(" + this.myColor[0] + "," + this.myColor[1] + "," + this.myColor[2] + ")";
  }

  timeUpdate(data: number) {
    if(!this.end) {
      this.timeLeft = data;
      if(this.timeLeft == 0){
        this.guess();  
      }
    }
  }
}

