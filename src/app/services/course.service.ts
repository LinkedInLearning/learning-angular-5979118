import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png', onSale: false },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10', soldOut: true, img: 'angular-logo.png', onSale: true },
    { id: 3, title: 'RxJS Fundamentals', description: 'Asynchronous data streams', price: 45, date: '2025-05-05', img: 'rxjs-logo.png', soldOut: false, onSale: true }
  ];
  
  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }
}
