## Base URL
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

### 3. List Schools Sorted by distance
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

