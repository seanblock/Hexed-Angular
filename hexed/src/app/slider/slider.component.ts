import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() color = '';
  @Input() num = 0;

  @Output() newItemEvent = new EventEmitter<object>();

  colorValue(value: string, num: number) {
    this.newItemEvent.emit({value, num});
  }

  constructor() { }

  ngOnInit(): void {
  }

  



}