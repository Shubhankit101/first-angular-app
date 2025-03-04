import { Component } from '@angular/core';
import { DUMMY_USERS }  from '../dummy-users';
import { signal } from '@angular/core';

const count = signal(0);
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  seletectedUser = signal(DUMMY_USERS[randomIndex]);

  get imagePath(){
    return 'assets/users/' + this.seletectedUser().avatar;
  }

  get userNamePath(){
    return this.seletectedUser.name;
  } 

  onSelectUser () {
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.seletectedUser.set(DUMMY_USERS[randomIndex]);
  }


}
