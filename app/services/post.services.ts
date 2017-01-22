import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

//Step 12: import injectable, http, and rxjs
// then go to file user.component.ts to inject the service.

//step 16: create getPost function
//next go to user.components.ts file

@Injectable()
export class PostsService {
  constructor(private http: Http){
    console.log('Post service initlaized!');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }
}
