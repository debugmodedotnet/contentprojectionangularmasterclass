import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentprojection';
  rememberMe = false; 
  login(data) {
    console.log('suuccessful logedin - ' , JSON.stringify(data),this.rememberMe);
  }
  signup(data) {
    console.log('succesful registered - ' + JSON.stringify(data));
  }

  rememberUser(data : boolean){
     this.rememberMe = data; 
  }

}
