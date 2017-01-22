import { Component } from '@angular/core';
//step 1: created a USER component.
//step 13: inject the service from the http post request here
//and then you need to add it as a provider- go into component decorator.
import {PostsService}  from '../services/post.services';


//button with click function will toggle between displaying Hide Hobbies and Show Hobbies.  The showHobbies evaluate the showHobbies function. If it evaluates true, the Hide Hobbies will be displayed.

//*ngIg will display if it evaluate to true
//*ngFor will loop through hobbies and show each hobby (for loop)

//step 18:  change the template to templateURL and add the html file name in.
//then add moduleID and set it equal to module.id.
//then take the ode that was in the template url into a html file.
//(added it to user.component.html)


//step 19: Create folder called about.components.ts in components file.
//go to that file.
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
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
  posts:Post[];

  //Step 7: constructor runs every time component is rendered.
  constructor(private postsService: PostsService){
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

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });


    //step 17: to use postService in the constructor, it needs to be injected
    //into the contructor.  -Add it inside () after constructor above.
    //then add the this.postService code that is directly above.
    //next step: look above in component
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

interface Post {
  id: number;
  title: string;
  body: string;
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
