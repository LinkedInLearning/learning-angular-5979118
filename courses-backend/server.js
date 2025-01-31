const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Path to our JSON database
const DB_FILE = path.join(__dirname, 'db.json');

// Helper function to load data
function loadData() {
    const dataBuffer = fs.readFileSync(DB_FILE);
    return JSON.parse(dataBuffer.toString());
}

// Helper function to save data
function saveData(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

/* 
  =============
  COURSES ROUTES
  =============
*/

// Get all courses
app.get('/courses', (req, res) => {
    const data = loadData();
    let courses = data.courses;

    const descriptionFilter = req.query.description;
    if (descriptionFilter) {
        // Filter if the course's description includes the substring
        courses = courses.filter(c =>
            c.description.toLowerCase().includes(descriptionFilter.toLowerCase())
        );
    }

    res.json(courses);
});

// Get a course by ID
app.get('/courses/:id', (req, res) => {
    const data = loadData();
    const courseId = parseInt(req.params.id, 10);
    const course = data.courses.find(c => c.id === courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
});

// Add a new course
app.post('/courses', (req, res) => {
    const data = loadData();
    const newCourse = req.body;
    // Simple ID generation if needed
    newCourse.id = Date.now();
    data.courses.push(newCourse);
    saveData(data);
    res.status(201).json(newCourse);
});

/* 
  =============
  STUDENTS ROUTES
  =============
*/

// Get all students
app.get('/students', (req, res) => {
    const data = loadData();
    res.json(data.students);
});

// Add a new student
app.post('/students', (req, res) => {
    const data = loadData();
    const newStudent = req.body;
    // Simple ID generation
    newStudent.id = Date.now();
    data.students.push(newStudent);
    saveData(data);
    res.status(201).json(newStudent);
});

// Add a course to a student's enrolledCourses
app.post('/students/:studentId/courses', (req, res) => {
    const data = loadData();
    const studentId = parseInt(req.params.studentId, 10);
    const student = data.students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    const { courseId } = req.body;
    // Check if the course exists
    const courseExists = data.courses.some(c => c.id === courseId);
    if (!courseExists) {
        return res.status(404).json({ error: 'Course not found' });
    }

    // Add courseId to enrolledCourses if not already there
    if (!student.enrolledCourses.includes(courseId)) {
        student.enrolledCourses.push(courseId);
        saveData(data);
    }

    res.status(200).json(student);
});

// Get all students for a given course
app.get('/courses/:id/students', (req, res) => {
    const data = loadData();
    const courseId = parseInt(req.params.id, 10);

    const enrolledStudents = data.students.filter((student) =>
        student.enrolledCourses && student.enrolledCourses.includes(courseId)
    );

    res.json(enrolledStudents);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
