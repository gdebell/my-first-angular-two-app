import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//step 3: import UserComponent into file.
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';

//step 4: Add UserComponent to the declarations list
//next step, go to app.components.ts file
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
