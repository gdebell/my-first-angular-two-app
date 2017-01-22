import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//step 3: import UC into file.//
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.components';
import { routing } from './services/app.routing';

//step 4: Add UserComponent to the declarations list
//next step, go to app.components.ts file
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//Step 15:  Import Http module at the top, and then
//add in to the imports in the NgModule
//Next, go to post.services.ts file


//step 23: import routing and then in NgModules, add routing to imports line.
//next step, go to index.html
