import { Component, OnInit, Output, EventEmitter, Input, ContentChild, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { User } from './user';
import { AuthrememberComponent } from './authremember.component';
import { AuthmessageComponent } from './authmessage.component';

const template = `
<div>
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
       <ng-content select="[hed]"></ng-content>
        <label>
            Email address
            <input type="email" name="email" ngModel>
        </label>
        <label>
            Password
            <input type="password" name="password" ngModel>
        </label>
      <ng-content select="button"></ng-content>
      <ng-content select="app-authremember"></ng-content>
         <app-authmessage [style.display]="(showMessage ? 'inherit' : 'none')"></app-authmessage>
    </form>
</div>

`

@Component({
  selector: 'app-authform',
  template: template
})
export class AuthformComponent implements OnInit, AfterContentInit, AfterViewInit {

  showMessage = false;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthrememberComponent) remember: AuthrememberComponent;
  @ViewChild(AuthmessageComponent) message : AuthmessageComponent;

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log(this.remember);
    if (this.remember) {
      this.remember.checked.subscribe(data => {
        this.showMessage = data;
      })
    }
  }

  ngAfterViewInit(){
    //console.log(this.message);
    this.message.days = 99; 
    this.cd.detectChanges();

  }

  onChecked(value: boolean) {

  }
  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
