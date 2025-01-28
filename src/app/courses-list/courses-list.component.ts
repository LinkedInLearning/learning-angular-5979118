import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  title: string = "Available courses";
  courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basics of Angular', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular internals', price: 99, date: '2025-04-10', soldOut: true, img: 'angular-logo.png' },
    { id: 3, title: 'RxJS Fundamentals', description: 'Asynchronous data streams', price: 45, date: '2025-05-05', img: 'rxjs-logo.png', soldOut: false }
  ];

  ngOnInit(): void {
    console.log("CoursesList initialized!")
  }

  viewDetails(title: string): void {
    alert(`Viewing details for ${title}`)
  }
}
