import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CourseComponent } from './courses/course/course.component';

const routes: Routes = [
  {
    path:'', redirectTo:'', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
