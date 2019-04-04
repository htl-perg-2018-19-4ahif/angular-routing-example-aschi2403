import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent implements OnInit {
  @Input() value = "";
  @Output() valueChange = new EventEmitter<string>();

  @Output() buttonChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onValueChanged(){
    this.valueChange.emit(this.value);
  }
  
}
