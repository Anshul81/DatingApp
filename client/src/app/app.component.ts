import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient, private accountService: AccountService){}

  setCurrentuser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.getUsers();
    this.setCurrentuser();
  }
    //Depriciated Version
     //getUsers(){
    //this.http.get('https://localhost:5001/api/users').subscribe(response =>{
   //  this.users=response;
  // },error => {console.log(error);
//  })
    //}

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
  
}
