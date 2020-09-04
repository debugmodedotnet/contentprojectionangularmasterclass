import { Component, OnInit } from '@angular/core';

const template = `
   <p>You will be logged in for {{days}} days </p>
`
@Component({
  selector: 'app-authmessage',
  template : template
})
export class AuthmessageComponent implements OnInit {

  days: number = 7;
  constructor() { }

  ngOnInit(): void {
  }

}
