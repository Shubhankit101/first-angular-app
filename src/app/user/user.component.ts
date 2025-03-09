import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

/*
Angular Signals provide a reactive, efficient, and predictable way to manage state and UI updates. 
They simplify change detection and improve performance, making them a great alternative to traditional state management approaches.

A Signal in Angular is a reactive state container that automatically tracks dependencies and updates when its value changes.
It provides a simpler, more efficient alternative to BehaviorSubject, EventEmitter, or ChangeDetectorRef for managing state.
*/
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
/*
Decorators in Angular are special functions that enhance classes, properties, methods, or parameters with metadata. 
They help Angular understand how to process a class and its members.
*/

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent {

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string; 
  onSelectUser() {}
}

