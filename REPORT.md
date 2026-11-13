# Laboratory Activities 3A and 3B: Student Course API

**Student:** __________________________  
**Section:** __________________________  
**Date:** __________________________

## Task A — Generate the backend in Replit

I created a Student Course API using Node.js and Express. The backend provides routes that return sample course information in JSON format. The main application file is `server.js`. The `package.json` file contains the project information, scripts, and the Express dependency.

### Endpoint verification

| Test | Request | Expected result |
|---|---|---|
| Health | `GET /api/health` | HTTP 200; status is OK |
| Course list | `GET /api/courses` | HTTP 200; returns three sample courses |
| Single course | `GET /api/courses/1` | HTTP 200; returns the course with ID 1 |
| Invalid/nonexistent course | `GET /api/courses/999` | HTTP 404; course was not found |
| Invalid ID format | `GET /api/courses/abc` | HTTP 400; ID must be a positive integer |

The four required endpoint categories are health, course list, single course, and invalid/nonexistent course. The extra invalid-format test checks input validation.

**Important:** The table shows the expected results from the supplied code. After running the project in Replit, replace or supplement this section with your actual test date, screenshots, and observed results.

### Main project components

- **Entry point:** `server.js`
- **Dependency:** Express
- **Start command:** `npm start`
- **API routes:** `GET /api/health`, `GET /api/courses`, and `GET /api/courses/:id`
- **Data source:** A sample JavaScript array in `server.js`; it is not a database.

### GitHub preparation

The project includes a `.gitignore` file and a README. To submit it to GitHub, initialize Git if needed, commit the project files, connect the GitHub repository, and push the `main` branch. The actual repository URL should be written here after it is created:

**GitHub repository URL:** ______________________________________

## Task B — Deploy the backend through Render

The project is configured for deployment as a Render Web Service. The expected configuration is:

- **Runtime:** Node
- **Build command:** `npm install`
- **Start command:** `npm start`

After connecting the GitHub repository, Render builds and starts the service. The public service URL should be recorded below:

**Render public URL:** __________________________________________

### Public endpoint test record

Use the actual Render URL followed by each route. Record the real status code and result after testing.

| Endpoint | Expected status | Actual status/result |
|---|---:|---|
| `/api/health` | 200 | __________________ |
| `/api/courses` | 200 | __________________ |
| `/api/courses/1` | 200 | __________________ |
| `/api/courses/999` | 404 | __________________ |
| `/api/courses/abc` | 400 | __________________ |

### Deployment issues and solutions

No actual deployment issue can be claimed until the service has been deployed and its logs have been checked. The following are possible issues and their solutions:

1. **Port configuration:** A hosted service may assign its own port. The application uses `process.env.PORT` and listens on `0.0.0.0`, allowing Render to provide the port.
2. **Missing dependencies:** If Express is not installed during the build, check that it is listed in `package.json` and use `npm install` as the build command.
3. **Incorrect start command:** If Render cannot start the service, verify that the start command is `npm start` and that `server.js` is present.
4. **Incorrect URL or route:** If a request returns 404, check that the Render hostname and `/api/...` path are correct. A 404 from `/api/courses/999` is expected because that course does not exist.

**Actual issue encountered and resolution:**  
________________________________________________________________  
________________________________________________________________

## Task C — Architecture Analysis

### 1. What is the role of the backend in your application?

The backend handles the application's logic and manages requests from the frontend. It receives requests, processes them, and sends responses. In this project, it provides course information through API routes. It acts as the connection between the user interface and the application's data.

### 2. What is the difference between an API endpoint and a database?

An API endpoint is a specific URL and method that a client uses to request or send information. A database is a system that stores and organizes information for long-term use. The endpoint is a way to access data, while the database is where data can be stored. In this prototype, the course information is stored in an in-memory array, not in a database.

### 3. Why does the backend return JSON?

The backend returns JSON because it is a lightweight and widely supported format for exchanging data. It is easy for websites, mobile apps, and other programs to read and process. JSON also organizes information using clear key-value pairs, making it suitable for API responses.

### 4. What is the difference between deploying a backend and integrating a frontend with it?

Deploying a backend means hosting the server online so that it can receive requests through a public URL. Integrating a frontend means connecting a website or mobile application to that backend by sending requests to its API endpoints and displaying the returned data. Deployment makes the backend available; integration makes the frontend use its services.

### 5. How could your existing Lesson 1 website and Lesson 2 mobile app use the same deployed API?

Both applications can send HTTP requests to the same public Render API URL. For example, the website and mobile app can request `/api/courses` to display the course list, or `/api/courses/1` to show one course. This avoids maintaining separate copies of the same course data in each application. Both clients can use the same backend as long as they follow the API's routes and response format.

### 6. Why is the current application a prototype rather than a complete student information system?

The application is only a prototype because it has a small set of sample course records and basic API routes. It does not have a persistent database, student accounts, login and role permissions, enrollment processing, grades, payments, schedules, or administrative functions. Its in-memory data can disappear when the server restarts. A complete student information system would need secure access, reliable data storage, validation, backups, monitoring, and more fully developed modules.

## Conclusion

This laboratory demonstrates how a backend API can be created, tested, prepared for GitHub, and deployed as a web service. The API allows different frontend applications to request the same course information. However, the current project is a learning prototype and needs a persistent database and stronger security and features before it could be used as a real student information system.
