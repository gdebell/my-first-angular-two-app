import { Component } from '@angular/core';
//step 1: created a USER component.
//step 13: inject the service from the http post request here
//and then you need to add it as a provider- go into component decorator.
import { PostsService }  from '../services/post.services';


//button with click function will toggle between displaying Hide Hobbies and Show Hobbies.  The showHobbies evaluate the showHobbies function. If it evaluates true, the Hide Hobbies will be displayed.

//*ngIg will display if it evaluate to true

//*ngFor will loop through hobbies and show each hobby (for loop)
@Component({
  selector: 'user',
  template: `
  <h1>{{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}} </p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
  <div *ngIf="showHobbies">
    <p><strong>Hobbies:</strong></p>
    <ul>
      <li *ngFor="let hobby of hobbies; let i = index">{{hobby}}<button (click)="deleteHobby(index)">DELETE</button></li>

    </ul>
    <form (submit)="addHobby(hobby.value)">
      <label>Add Hobby: </label>
      <input type="text" #hobby /><br />
    </form>
  </div>
  <hr />
  <h3>Edit User</h3>
  <form>
    <label>Name: </label>
    <input type="text" name="name" [(ngModel)]="name"/><br />
    <label>Email: </label>
    <input type="text" name="email" [(ngModel)]="email"/><br />
    <label>Street: </label>
    <input type="text" name="address.street" [(ngModel)]="address.street"/><br />
    <label>City: </label>
    <input type="text" name="address.city" [(ngModel)]="address.city"/><br />
    <label>State: </label>
    <input type="text" name="address.state" [(ngModel)]="address.state"/><br />
  <form>
  `,
  providers: [PostsService]
})
//step 14: add providers and PostService
//next: go to app.module.ts file

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

    //step 17: to use postService in the constructor, it needs to be injected
    //into the contructor.  -Add it inside () after constructor above.
    //then add code beloe
  }

  toggleHobbies = function(){
    console.log('you clicked the button!');
    if(this.showHobbies == true){
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby:string) {
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(index:number) {
    console.log(index);
    this.hobbies.splice(index, 1);
  }

}

//Step 8: address is an object so we created an interface named object and
//set the address in the UserComponent above to the inteface name.
interface address {
  street: string;
  city: string;
  state: string;
}

//step 9: Use directives: *ngIf, *ngFor, create a function for button with listener event

//Step 10: Add form HTML tags to template.
//When createing a form, the name attr must match the ngModel attr name
// and then import the FormsModule into the app.module.ts folder
// using code....  import {FormsModule } from '@angular/forms';
// and then add FormsModule to the imports in the same file.

//step 11: Lets set up a service to get data from an API.
//create a folder called services in the app folder.
//create a file called post.services.ts
//go to that folder.
