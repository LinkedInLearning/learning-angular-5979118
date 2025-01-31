import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';

export const routes: Routes = [
    // Our two main routes:
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'sign-up', component: SignUpFormComponent },
    { path: 'new-course', component: AddNewCourseComponent }
  ];