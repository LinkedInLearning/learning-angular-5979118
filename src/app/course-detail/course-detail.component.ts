import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course: Course | null = null;

  constructor(private courseService: CourseService){}

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.error('Error fetching course by ID:', err);
      }
    })
  }

}
