import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @Input() colors = ['red', 'green', 'blue'];
  @Input() gameStatus = true
  secondsToTimer: number = 0;
  end = false;
  randomColor: Array<number> = [];
  myColor: Array<number> = [50, 50, 50];
  myRgb = "";
  timeLeft = 0;
  title = 'hexed';
  score = 0;
  initials = ""
  // topTen:A = [];
  topTen: Array<{ initials: string, score: number }> = []
  fever = new Audio('../assets/fever.mp3');
  win = new Audio('../assets/win.mp3');

  
  sendToTimer(data: any) {
    this.secondsToTimer = parseInt(data);
    console.log(this.secondsToTimer)
  }

  setInitials(data: string) {
    this.initials = data;
  }
  
  restart() {
    this.end = false;
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
    this.getScore()
    this.end = true;
    this.restart()
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
      if(this.timeLeft === 0){
        this.guess();
      }
    }
  }

  getScore() {
    console.log(this.timeLeft);
    console.log("score")
    this.score = (255 - Math.abs(this.randomColor[0] - this.myColor[0])) + (255 - Math.abs(this.randomColor[1] - this.myColor[1])) + (255 - Math.abs(this.randomColor[2] - this.myColor[2])) * Math.floor(this.timeLeft) * (1000 * (101 - this.secondsToTimer));
    console.log(this.score);
    this.topTenFunc();
  }

  topTenFunc() {
    let temp = {initials: this.initials, score: this.score};

    this.topTen.push(temp);
    this.topTen.sort(function(a, b) {
      return b.score - a.score;
    });

    if(this.topTen.length > 10) {
      this.topTen.pop();
    }
  }

}

