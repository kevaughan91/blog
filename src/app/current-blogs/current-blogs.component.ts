import { Component } from '@angular/core';

@Component({
  selector: 'current-blogs',
  templateUrl: './current-blogs.component.html',
  styleUrls: ['./current-blogs.component.css']
})
export class CurrentBlogsComponent {
  title = 'app';

  blogs = [{
      id: 1,
      month:"MAR",
      day:"06",
      year:"2018",
      title: "Giving Our Bathroom Some Flair",
      cover: "bathroom.JPG",
      location: "Durham, NC",
      content: "This bathroom has been one of the neglected rooms in our house since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
    },{
      id: 2,
      month:"FEB",
      day:"27",
      year: "2018",
      title: "Mudroom Glam",
      cover: "sign.JPG",
      location: "Durham, NC",
      content: "This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
    }, {
      id:3,
      month:"AUG",
      day:"05",
      year: "2017",
      title: "We Finally Have a Dining Room!",
      cover: "diningroom.JPG",
      location: "Durham, NC",
      content: "This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
   
    }];
}
