const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample in-memory course data. This is not a persistent database.
const courses = [
  {
    id: 1,
    code: "IT101",
    title: "Introduction to Information Technology",
    instructor: "Maria Santos",
    units: 3
  },
  {
    id: 2,
    code: "CS102",
    title: "Programming Fundamentals",
    instructor: "Juan Dela Cruz",
    units: 3
  },
  {
    id: 3,
    code: "SIA201",
    title: "System Integration and Architecture",
    instructor: "Ana Reyes",
    units: 3
  }
];

// Health-check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Student Course API is running"
  });
});

// Return all courses
app.get("/api/courses", (req, res) => {
  res.status(200).json({
    count: courses.length,
    data: courses
  });
});

// Return one course by numeric ID
app.get("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      error: "Invalid course ID. Please provide a positive integer."
    });
  }

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return res.status(404).json({
      error: `Course with ID ${id} was not found.`
    });
  }

  return res.status(200).json({ data: course });
});

// Unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Student Course API listening on port ${PORT}`);
});
