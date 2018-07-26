import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginID: number = 10;
  LoginStatus: string ="offline";
  allowNewServer = false;
  createLogin = "Created";

  getLogin(){
   return this.LoginStatus;
  }

  onCreateUser(){
    // debugger
   this.createLogin = "Not created";
  }

  onUpdateServerName(event:Event){
    console.log(event);
  }
  constructor() { 
    setTimeout(() => { 
      this.allowNewServer = true;
    },2000);
  
  }

  ngOnInit() {
  }

}
