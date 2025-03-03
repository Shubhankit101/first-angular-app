import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";


//Decorator : TypeScript feature which that in the end adds some metadata to the thing its attached to 
//            It is part of the angular framework
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
