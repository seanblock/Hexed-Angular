import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css', '../app.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() score = 0;
  @Input() topTen:Array<{ initials: string, score: number }> = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
