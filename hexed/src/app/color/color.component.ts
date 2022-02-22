import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Array<number>>();
  rgb = "";
  myRgb = "";
  @Input() myColor = "";

  constructor() { }

  ngOnInit(): void {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    this.rgb = "rgb(" + r + "," + g + "," + b + ")";
    this.newItemEvent.emit([r, g, b]);
  }

}
