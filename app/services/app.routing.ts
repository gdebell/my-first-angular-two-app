import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from '../components/user.component';
import {AboutComponent} from '../components/about.components';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


//step 22: import angulars routing, line 1-2
// import your components with file location, line 4-5
// define your Routes, line 7
// export routing file , line 18
//next step, go to app.module.ts to import routing
