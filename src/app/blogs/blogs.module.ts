import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BlogRoutingModule } from './blogs-routing.module';

import { BlogsListComponent }    from './blogs-list/blogs-list.component';
import { BlogViewComponent }  from './blog-view/blog-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogsListComponent,
    BlogViewComponent
  ]
})
export class BlogsModule {}