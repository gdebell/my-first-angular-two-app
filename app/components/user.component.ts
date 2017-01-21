import { Component } from '@angular/core';
//step 1: created a USER component.


//button with click function will toggle between displaying Hide Hobbies and Show Hobbies.  The showHobbies evaluate the showHobbies function. If it evaluates true, the Hide Hobbies will be displayed.

//*ngIg will display if it evaluate to true

//*ngFor will loop through hobbies and show each hobby (for loop)
@Component({
  selector: 'user',
  template: `
  <h1> Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}} </p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
  <div *ngIf="showHobbies">
    <p><strong>Hobbies:</strong></p>
    <ul>
      <li *ngFor="let hobby of hobbies">{{hobby}}</li>
    </ul>
  <div>
  `,
})
//step 2: export the UserComponent, go to app.module.ts next.
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  //Step 7: constructor runs every time component is rendered.
  constructor(){
    console.log('Hello beautiful constructor!! You ran.')
    this.name = 'John Doe';
    this.email = 'john@gmail.com';
    this.address = {
      street: '123 Main Street',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }

  toggleHobbies function(){
    console.log('you clicked the button!');
    if(this.showHobbies == true){
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
}

//Step 8: address is an object so we created an interface named object and
//set the address in the UserComponent above to the inteface name.
interface address {
  street: string;
  city: string;
  state: string;
}
