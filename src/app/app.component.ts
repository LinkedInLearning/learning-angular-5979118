import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-booking-system';
}
