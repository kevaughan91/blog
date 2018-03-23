import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BlogService } from './../../services/blog.service';

@Component({
  selector: 'blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  currentBlog;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.blogService.getBlog(id)
    .subscribe(blog => this.currentBlog = blog);

    // this.currentBlog = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.blogService.getBlog(params.get('id')));

  }

    goBackToBlogs(){
      this.router.navigate(['/blog']);
    }
    
}
