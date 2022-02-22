import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() colors = ['red', 'green', 'blue'];
  @Input() gameStatus = true
  title = 'hexed';

  fever = new Audio('../assets/fever.mp3');
  win = new Audio('../assets/win.mp3');
  secondsToTimer: number;

  sendToTimer($event) {
    this.secondsToTimer = $event;
  }
  
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
    console.log("Game Started")
    this.fever.currentTime = 0
    this.fever.pause()
    this.win.play()
    this.gameStatus = true
  }

  colorGet(data: object) {
    var box = <HTMLInputElement>document.getElementById("my_box");
    var red = <HTMLInputElement>document.getElementById("red");
    var green = <HTMLInputElement>document.getElementById("green");
    var blue = <HTMLInputElement>document.getElementById("blue");
     
    console.log(data)
    box.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
  }
}
