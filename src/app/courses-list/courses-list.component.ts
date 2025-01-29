import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  title: string = "Available courses";
  courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png', onSale: false },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10', soldOut: true, img: 'angular-logo.png', onSale: true },
    { id: 3, title: 'RxJS Fundamentals', description: 'Asynchronous data streams', price: 45, date: '2025-05-05', img: 'rxjs-logo.png', soldOut: false, onSale: true }
  ];

  ngOnInit(): void {
    console.log("CoursesList initialized!")
  }

  onCourseBooked(course: any): void {
    console.log('Parent heard about booking:', course.title);
    // Potentially do more here in the future
  }

 
}
