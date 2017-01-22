//step 20: copy  app.components.ts file and add it to this folder.
//make modification: 1. change selector name 2. Change component template
//3. change the name of the export class.
//next step go into app.module.ts to be able to use it (we are registering it)

import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
  <h1>About this app!!!</h1>`,
})
export class AboutComponent {
}


//step 21: Create and app.routing.ts file.  -- go to that file.s
