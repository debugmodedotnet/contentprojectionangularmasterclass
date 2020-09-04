import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const template = `
<label>
<input type="checkbox" (change)="onChecked($event.target.checked)"/>
keep me logged in 
</label>
`

@Component({
  selector: 'app-authremember',
  template: template
})
export class AuthrememberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}
