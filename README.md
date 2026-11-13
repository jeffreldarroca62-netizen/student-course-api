# Student Course API

A beginner-friendly REST API built with Node.js and Express. It returns sample course information in JSON.

## 1. Run locally or in Replit

1. Create a Node.js Replit project.
2. Upload/copy these project files into the Replit workspace.
3. Open the Shell and run `npm install`.
4. Run `npm start`.
5. Open the Replit web preview or use the Replit-provided public URL.

The server uses `process.env.PORT` when available and listens on `0.0.0.0`, which supports hosted environments.

## 2. API endpoints

| Method | Endpoint | Expected result |
|---|---|---|
| GET | `/api/health` | HTTP 200 and API status JSON |
| GET | `/api/courses` | HTTP 200 and a list of courses |
| GET | `/api/courses/1` | HTTP 200 and course with ID 1 |
| GET | `/api/courses/999` | HTTP 404 because the course does not exist |
| GET | `/api/courses/abc` | HTTP 400 because the ID is invalid |

Example health response:

```json
{
  "status": "OK",
  "message": "Student Course API is running"
}
```

Example course-list response:

```json
{
  "count": 3,
  "data": [
    {
      "id": 1,
      "code": "IT101",
      "title": "Introduction to Information Technology",
      "instructor": "Maria Santos",
      "units": 3
    }
  ]
}
```

The course-list endpoint returns three sample records; the example above is shortened for readability.

## 3. Important project parts

- `server.js` — application entry point; creates the Express app and defines API routes.
- `package.json` — project metadata, start scripts, and dependencies.
- `express` — dependency used to create the HTTP server and routes.
- `README.md` — setup, endpoint, and deployment instructions.
- `.gitignore` — prevents generated dependencies and local secrets from being committed.

## 4. Push to GitHub

In the Replit Shell (after creating an empty GitHub repository), run:

```bash
git init
git add .
git commit -m "Create Student Course API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the placeholder URL with your own GitHub repository URL. Do not publish passwords, API keys, or `.env` files.

If Git is already initialized in Replit, skip `git init` and check the existing remote with `git remote -v`.

## 5. Deploy on Render

1. Sign in to Render and choose **New** → **Web Service**.
2. Connect your GitHub account and select this repository.
3. Use these settings:

| Setting | Value |
|---|---|
| Runtime | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Instance type | Free or the class-required option |

4. Click **Create Web Service** and wait for the deployment to finish.
5. Copy the Render service URL, for example `https://your-service-name.onrender.com`.
6. Test the endpoints by adding:
   - `/api/health`
   - `/api/courses`
   - `/api/courses/1`
   - `/api/courses/999`
   - `/api/courses/abc`

The example hostname is only a placeholder. Use the actual URL Render assigns to your service.

## 6. Troubleshooting

- **Application failed to start:** confirm `server.js` exists and `package.json` contains `"start": "node server.js"`.
- **Port binding issue:** use `process.env.PORT || 3000` and listen on `0.0.0.0`.
- **Build failure:** inspect Render logs and confirm dependencies are listed in `package.json`; run `npm install` locally.
- **404 for a route:** include the `/api` prefix and check the spelling and HTTP method.
- **Course not found:** `/api/courses/999` should return 404 by design; it is not a deployment failure.
- **Invalid ID:** `/api/courses/abc` should return 400 by design.
- **First request is slow on a free service:** the instance may have been idle and need time to start. Wait and retry.

## 7. Prototype limitation

Course records are stored in an in-memory JavaScript array. They reset when the server restarts or redeploys and are not shared with other systems as persistent records. A real student information system needs a database, authentication, authorization, validation, security controls, monitoring, backups, and additional modules.
