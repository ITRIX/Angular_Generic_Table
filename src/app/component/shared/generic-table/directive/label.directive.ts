import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[label-host]',
})
export class LabelDirective {
  @Input() data: string;
  constructor(public viewContainerRef: ViewContainerRef) { }
}
