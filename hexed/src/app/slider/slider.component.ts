import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() color = '';


  @Output() newItemEvent = new EventEmitter<object>();

  colorValue(value: string, name: string) {
    this.newItemEvent.emit({value, name});
  }

  constructor() { }

  ngOnInit(): void {
  }

  



}