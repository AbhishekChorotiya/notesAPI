
# Notes API Documentation

## Installation

- Clone the repository:

   ```bash
   git clone https://github.com/AbhishekChorotiya/skillstreet.git
   cd skillstreet
   ```

- Install dependencies:

   ```bash
   npm install
   ```

## Usage

 - Start the API server:

```bash
npm start
```

- The API will be available at `http://localhost:3000` by default.

### Base URL
```
http://localhost:3000/
```

## Testing 
In root directory 
```bash
npm test
```
- It tests the App on different testcases.
- Framework used - **Jest**

## **API Endpoints**

### 1. Create a New Note

- **Endpoint:**
  ```
  POST /notes
  ```

- **Request:**
  - Method: `POST`
  - URL: `/notes`
  - Headers:
    - Authorization: Basic Auth (Username: **admin**, Password: **admin**)
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Response:**
  - Status Code: `201 Created`
  - Body:
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string"
    }
    ```

### 2. Retrieve All Notes

- **Endpoint:**
  ```
  GET /notes
  ```

- **Request:**
  - Method: `GET`
  - URL: `/notes`
  - Headers:
    - Authorization: Basic Auth (Username: **admin**, Password: **admin**)

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "_id": "string",
        "title": "string",
        "content": "string"
      },
      // ... (more notes)
    ]
    ```

### 3. Retrieve Single Note by ID

- **Endpoint:**
  ```
  GET /notes/:id
  ```

- **Request:**
  - Method: `GET`
  - URL: `/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: **admin**, Password: **admin**)

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string"
    }
    ```

### 4. Update Note by ID

- **Endpoint:**
  ```
  PUT /notes/:id
  ```

- **Request:**
  - Method: `PUT`
  - URL: `/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: **admin**, Password: **admin**)
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string"
    }
    ```

### 5. Delete Note by ID

- **Endpoint:**
  ```
  DELETE /notes/:id
  ```

- **Request:**
  - Method: `DELETE`
  - URL: `/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: **admin**, Password: **admin**)

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Note deleted successfully"
    }
    ```

### 6. Error Responses

- **Unauthorized Access (401):**
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "error": "Unauthorized Access"
    }
    ```

- **Not Found (404):**
  - Status Code: `404 Not Found`
  - Body:
    ```json
    {
      "error": "Not Found"
    }
    ```

- **Internal Server Error (500):**
  - Status Code: `500 Internal Server Error`
  - Body:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

## Contact

- Name : Abhishek Chorotiya
- Phone : +91 8003132368
- Email : 2020kuec2033@iiitkota.ac.in 
  
