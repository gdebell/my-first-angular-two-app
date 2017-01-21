import { Component } from '@angular/core';
//step 1: created a USER component.
@Component({
  selector: 'user',
  template: `
  <h1> Hello {{name}}</h1>
  <p> Email: {{email}} </p>
  <p> Address: {{address.street}} {{address.city}}, {{address.state}} </p>`,
})
//step 2: export the UserComponent, go to app.module.ts next.
export class UserComponent {
  name: string;
  email: string;
  address: address;

  //Step 7: constructor runs every time component is rendered.
  constructor(){
    console.log('Hello beautiful constructor!! You ran.')
    this.name = 'John Doe';
    this.email = 'john@gmail.com';
    this.address = {
      street: '123 Main Street',
      city: 'Boston',
      state: 'MA'
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
