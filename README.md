
# Notes API

This is a simple API for managing notes. It allows you to create, retrieve, update, and delete notes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/notes-api.git
   cd notes-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

### 1. Start the API server:

```bash
npm start
```

The API will be available at `http://localhost:3000` by default.

### 2. API Endpoints

- **Create a New Note:**
  - Method: `POST`
  - URL: `http://localhost:3000/notes`
  - Headers:
    - Authorization: Basic Auth (Username: admin, Password: admin)
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Retrieve All Notes:**
  - Method: `GET`
  - URL: `http://localhost:3000/notes`
  - Headers:
    - Authorization: Basic Auth (Username: admin, Password: admin)

- **Retrieve Single Note by ID:**
  - Method: `GET`
  - URL: `http://localhost:3000/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: admin, Password: admin)

- **Update Note by ID:**
  - Method: `PUT`
  - URL: `http://localhost:3000/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: admin, Password: admin)
  - Body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Delete Note by ID:**
  - Method: `DELETE`
  - URL: `http://localhost:3000/notes/:id`
  - Headers:
    - Authorization: Basic Auth (Username: admin, Password: admin)

### 3. Error Responses

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


### Contact

- Name : Abhishek Chorotiya
- Phone : +91 8003132368
- Email : 2020kuec2033@iiitkota.ac.in

ThankYou !