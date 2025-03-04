import { Component } from '@angular/core';
import { DUMMY_USERS }  from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  seletectedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    return 'assets/users/' + this.seletectedUser.avatar;
  }

  get userNamePath(){
    return this.seletectedUser.name;
  }
}
