import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() colors = ['red', 'blue', 'green'];
  title = 'hexed';



  color_get(data: object) {
    var box = <HTMLInputElement>document.getElementById("my_box");
    var red = <HTMLInputElement>document.getElementById("red");
    var green = <HTMLInputElement>document.getElementById("green");
    var blue = <HTMLInputElement>document.getElementById("blue");
     
    console.log(data)
    box.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
  }
}