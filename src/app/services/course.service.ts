import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private baseUrl = 'http://localhost:3000';

  private selectedCourse: Course | null = null;

  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }

  getSelectedCourse(): Course | null {
    return this.selectedCourse;
  }

  constructor(private http: HttpClient) { }

  // GET all courses
  getCourses(description?: string | null): Observable<Course[]> {
    let url = `${this.baseUrl}/courses`;
    if (description) {
      url += `?description=${description}`;
    }
    return this.http.get<Course[]>(url);  }

  // GET a course by id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  // POST a new course
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }
}
