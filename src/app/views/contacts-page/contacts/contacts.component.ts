import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  constructor() {
    setInterval(() => {
      // Your logic here
      console.log('This message appears every 2 seconds');
    }, 2000); // 2000 milliseconds = 2 seconds
  }
}
