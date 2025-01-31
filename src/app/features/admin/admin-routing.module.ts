import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { AppComponent } from '../../app.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'new-course', component: AddNewCourseComponent},
      { path: 'students', component: StudentListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
