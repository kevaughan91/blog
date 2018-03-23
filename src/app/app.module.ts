import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsModule } from './blogs/blogs.module';

import { AppComponent } from './app.component';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { BlogViewComponent } from './blogs/blog-view/blog-view.component';
import { PicsComponent } from './pics/pics.component';
import { BlogService } from './services/blog.service';
const appRoutes: Routes = [
  { path: 'pics', component: PicsComponent },
  { path: '',   redirectTo: '/blog', pathMatch: 'full' },
];

//{ path: '**', component: PageNotFoundComponent }

@NgModule({
  declarations: [
    AppComponent, PicsComponent
  ],
  imports: [
    BrowserModule,
    BlogsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
