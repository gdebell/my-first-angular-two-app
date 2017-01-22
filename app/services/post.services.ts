import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

//Step 12: import injectable, http, and rxjs
// then go to file user.component.ts to inject the service.

//step 16: create getPost function
//next go to user.components.ts file

@Injectable()
export class PostsService {
  constructor(private http: Http){
    console.log('Post service initlaized!');
  }
}
