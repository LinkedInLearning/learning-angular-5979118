import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes: Routes = [
    // Our two main routes:
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses/:id', component: CourseDetailComponent }
  ];