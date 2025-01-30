export interface Student {
    id: number;
    name: string;
    email?: string;  // optional
    enrolledCourseIds?: number[]; // references to courses
}
