import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsListComponent }    from './blogs-list/blogs-list.component';
import { BlogViewComponent }  from './blog-view/blog-view.component';
import { BlogService } from './../services/blog.service';

const blogRoutes: Routes = [
  { path: 'blog',  component: BlogsListComponent },
  { path: 'blog/:id', component: BlogViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  providers: [ BlogService ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }