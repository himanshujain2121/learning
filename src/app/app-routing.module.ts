import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseListComponent } from './courses/course-list/course-list.component';


const routes: Routes = [
  {
    path:'', redirectTo:'', pathMatch: 'full'
  },
  {
    path:'courses', component:CourseListComponent
  },
  {
    path:'about-us', component:CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
