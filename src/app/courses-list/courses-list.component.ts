import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  title: string = "Available courses";
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
        const desc = params.get('description');
        this.loadCourses(desc);
    });
  }

  loadCourses(description: string | null) {
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking:', course.title);
    // Potentially do more here in the future
  }

  onWishlistAdded(course: Course) {
    console.log('Wishlist event triggered for:', course.title);
    this.wishlist.push(course);
  }
}
