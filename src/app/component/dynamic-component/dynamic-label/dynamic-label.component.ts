import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-label',
  templateUrl: './dynamic-label.component.html',
  styleUrls: ['./dynamic-label.component.scss']
})
export class DynamicLabelComponent implements OnInit {
  @Input() data: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
