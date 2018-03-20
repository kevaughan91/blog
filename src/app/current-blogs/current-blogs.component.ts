import { Component } from '@angular/core';

@Component({
  selector: 'current-blogs',
  templateUrl: './current-blogs.component.html',
  styleUrls: ['./current-blogs.component.css']
})
export class CurrentBlogsComponent {
  title = 'app';

  blogs = [{
      month:"MAR",
      day:"06",
      year:"2018",
      title: "Giving our bathroom some flair",
      cover: "bathroom.JPG",
      content: "This bathroom has been one of the neglected rooms in our house since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
    },{
      month:"FEB",
      day:"27",
      year: "2018",
      title: "Mudroom glam",
      cover: "sign.JPG",
      content: "This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
    }, {
      month:"AUG",
      day:"05",
      year: "2017",
      title: "We finally have a dining room!",
      cover: "diningroom.JPG",
      content: "This batse since we moved in in August 2016. But after finding this old wooden shelf, I decided to finally put something together and finish this"
   
    }];
}
