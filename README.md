# Tech Stacks Used

This is a backend project built with the **Hono Framework**, **Prisma ORM**, and deployed on **Cloudflare Workers**. It implements backend connection pooling using **Prisma Accelerate** and provides endpoints for managing school data.

---

## Features
- Lightweight and fast backend using the **Hono Framework**.
- Database management with **Prisma ORM** and SQL.
- Deployed on **Cloudflare Workers** for serverless execution.
- Connection pooling with **Prisma Accelerate**.
- Endpoints to check backend status, add schools, and retrieve sorted school data.

---

## Base Deloyed URL
`https://backend.kkr345.workers.dev/api/v1/schools`

---

## Endpoints

### 1. Check Backend Status
- **Endpoint**: `/alive`  
- **Method**: `GET`  
- **Description**: Checks if the backend is alive.  

#### Example Response
- **Status Code**: `200`
```json
{
  "msg": "backend is alive "
}
```

---

### 2. Add a New School
- **Endpoint**: `/addSchool`  
- **Method**: `POST`  
- **Description**: Adds a new school to the database.  

#### Headers
- `Content-Type: application/json`

#### Body (JSON)
```json
{
  "name": "Greenwood High School",
  "address": "123 Maple Street, Springfield",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

#### Example Responses
1. **Success (Status 200)**
```json
{
  "id": 1,
  "name": "Greenwood High School",
  "address": "123 Maple Street, Springfield",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

---

### 3. List Schools Sorted by Distance
- **Endpoint**: `/listSchools`  
- **Method**: `GET`  
- **Description**: Retrieves a list of all schools sorted by proximity to the given latitude and longitude.  

#### Query Parameters
- `latitude`: User's current latitude (required, number).  
- `longitude`: User's current longitude (required, number).  

#### Example Request
```
GET /listSchools?latitude=40.7128&longitude=-74.0060
```

#### Example Responses
1. **Success (Status 200)**
```json
[
  {
    "id": 1,
    "name": "Greenwood High School",
    "address": "123 Maple Street, Springfield",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  {
    "id": 2,
    "name": "Springfield Elementary",
    "address": "456 Elm Street, Springfield",
    "latitude": 40.7130,
    "longitude": -74.0070
  }
]
```

---

## Git Repository Setup

Follow these steps to clone and set up the project:

### 1. Clone the Repository
```bash
git clone https://github.com/369koushil/nodejs-internship-assignment
cd nodejs-internship-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Environment Variables
Create a `.env` file in the root directory and add your environment variables:
```env
DATABASE_URL="database-connection-string"
```

### 4. Run locally
```bash
wrangler dev
```

### 4. complie ts to js files
```bash
tsc -b
```
---

## Deployment Guide (Cloudflare Workers)

### 1. Install Wrangler CLI
Install the Wrangler CLI to manage Cloudflare Workers:
```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare
```bash
wrangler login
```

### 3. Configure Wrangler
Update the `wrangler.toml` file with your Cloudflare account details:
```toml
name = "hono-backend"
type = "javascript"
account_id = "your-cloudflare-account-id"
workers_dev = true
compatibility_date = "2024-12-08"
```

### 4. Deploy 

```bash
wrangler deploy
```



