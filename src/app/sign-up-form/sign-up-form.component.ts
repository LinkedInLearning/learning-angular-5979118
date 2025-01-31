import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];

  constructor(private fb: FormBuilder, private courseService: CourseService){}

  ngOnInit(): void {
      this.signUpForm = this.fb.group({
        name: [''],
        email: [''],
        enrolledCourseId: [null]
      });

      this.courseService.getCourses().subscribe({
        next: (data: Course[]) => {
          this.courses = data;
        },
        error: (err) => {
          console.error('Error fetching courses:', err);
        }
      });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }

}
