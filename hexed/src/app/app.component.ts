import { Component, Input } from '@angular/core';

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

  fever = new Audio('../assets/fever.mp3');
  win = new Audio('../assets/win.mp3');
  
  newGame() {
    this.win.currentTime = 0
    this.win.pause()
  } 

  startGame() {
    console.log("Game Started")
    this.newGame()
    this.fever.play()
    this.gameStatus = false
  }

  guess() {
    console.log("Game Ended")
    this.fever.currentTime = 0
    this.fever.pause()
    this.win.play()
    //this.gameStatus = true
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
    }
  }
}