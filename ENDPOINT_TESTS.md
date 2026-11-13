# Endpoint Test Checklist

Run the server with `npm install` and `npm start`. In a second terminal, use the commands below.

```bash
curl -i http://localhost:3000/api/health
curl -i http://localhost:3000/api/courses
curl -i http://localhost:3000/api/courses/1
curl -i http://localhost:3000/api/courses/999
curl -i http://localhost:3000/api/courses/abc
```

Repeat with the Render public URL after deployment, replacing `http://localhost:3000` with your actual service URL.

Expected HTTP status codes:
- `/api/health` → 200
- `/api/courses` → 200
- `/api/courses/1` → 200
- `/api/courses/999` → 404
- `/api/courses/abc` → 400

A successful response from `/api/courses/999` is a 404 response by design: it verifies that missing course IDs are handled correctly.
