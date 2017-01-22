import { Component } from '@angular/core';

//Step 5: Use the selctor name (from user.components.ts)
//as the html tags in template.

//Step 6: The selector in this file (below) should match the
//HTML tags in the index.html file.  See 'my-app' for example.
//Next step, go to user.components.ts to create a constructor
@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
      </li>
    </ul>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}


//change the template above to make it dynamic
