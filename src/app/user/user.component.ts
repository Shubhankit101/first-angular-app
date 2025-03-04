import { Component } from '@angular/core';
import { DUMMY_USERS }  from '../dummy-users';
import { signal } from '@angular/core';
/*
Angular Signals provide a reactive, efficient, and predictable way to manage state and UI updates. 
They simplify change detection and improve performance, making them a great alternative to traditional state management approaches.

A Signal in Angular is a reactive state container that automatically tracks dependencies and updates when its value changes.
It provides a simpler, more efficient alternative to BehaviorSubject, EventEmitter, or ChangeDetectorRef for managing state.
*/
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
