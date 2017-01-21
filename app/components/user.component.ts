import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1> Hello {{name}}</h1>
  <p> Email: {{email}} </p>
  <p> Address: {{address.street}} {{address.city}}, {{address.state}} </p>`,
})
export class UserComponent {
  name = 'John Doe';
  email = 'john@gmail.com';
  address = {
    street: '123 Main Street',
    city: 'Boston',
    state: 'MA'
  }
}
