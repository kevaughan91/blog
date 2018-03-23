import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BlogService {

  constructor() { }

  blogs = [{
    id: 1,
    month:"Mar",
    day:"06",
    year:"2018",
    title: "Giving Our Bathroom Some Flair",
    cover: "bathroom.JPG",
    location: "Durham, NC",
    content: "This bathroom has been one of the neglected rooms in our house since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },{
    id: 2,
    month:"Feb",
    day:"27",
    year: "2018",
    title: "Mudroom Glam",
    cover: "sign.JPG",
    location: "Durham, NC",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
  }, {
    id:3,
    month:"Aug",
    day:"05",
    year: "2017",
    title: "We Finally Have a Dining Room!",
    cover: "diningroom.JPG",
    location: "Durham, NC",
    content: "This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
 
  }];

  getBlog(id): Observable<any> {
    return of(this.blogs[id-1]);
  }

  getAllBlogs(): Observable<any> {
    return of(this.blogs);
  }
}

