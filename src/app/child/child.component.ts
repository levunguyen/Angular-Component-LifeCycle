import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
  // OnChanges ,
  DoCheck{
  @Input()
  countChild;

  constructor() {
    console.log('Constructor: Child-component');
  }

  ngOnInit(): void {
    console.log('OnInit: Child-Component');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('OnChange: ' + JSON.stringify(changes));
  // }

  increment() {
    this.countChild++;
  }

  ngDoCheck(): void {
    console.log('DoCheck: ' + this.countChild);
  }
}
