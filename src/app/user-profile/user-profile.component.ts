import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = {
    name: "Doe",
    firstname: "John",
    age: 25,
    quote: "Find a reason to smile every day",
    photo:"https://randomuser.me/api/portraits/lego/2.jpg"
  }

  displayAge:Boolean = false
 
}
