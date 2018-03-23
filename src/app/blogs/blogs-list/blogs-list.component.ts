import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { BlogService } from './../../services/blog.service';

@Component({
  selector: 'blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent {
  constructor(
    private router: Router,
    private blogService: BlogService
  ) {}

  blogs = [];

  ngOnInit() {
    this.blogService.getAllBlogs()
    .subscribe(blogs => this.blogs = blogs);
  }

  
  title = 'app';


    showBlog(id){
      this.router.navigate(['/blog', id]);
    }
}
