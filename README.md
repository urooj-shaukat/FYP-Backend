# ProGrade - Automated Code Grader and Tester (Backend)

## Overview

Welcome to the ProGrade backend repository! This project is the backend implementation of an automated code grader and tester designed for programming languages. ProGrade handles the major functionality of assignment testing and interacts with the frontend using a RESTful API.

### Key Features

- Utilizes Docker for providing runtime environments for code execution and testing.
- Built with Node.js and Express.js for handling HTTP requests and managing the backend logic.
- Uses MongoDB as the database to store assignment and user information.
- Implements child processes in Node.js for seamless communication with Docker.
- Incorporates Multer for handling file uploads.

## Tech Stack

- Node.js: A JavaScript runtime built on the V8 JavaScript engine for server-side development.
- Express.js: A web application framework for Node.js to build APIs and handle HTTP requests.
- Docker
- MongoDB: A NoSQL database for storing assignment and user-related data.
- Multer: A middleware for handling file uploads.
- Child Processes in Node.js: Used for communication between Node.js and Docker.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/urooj-shaukat/FYP-Backend.git
   cd FYP-Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB and start the MongoDB server.
   - Create a database named `prograde` and configure the connection in the `.env` file:

     ```env
     MONGO_URI
     ```

4. Set up Docker:
   - Install Docker on your machine.
   - Pull Docker images for various programming languages.

5. Start the backend server:

   ```bash
   npm start
   ```

   This will start the backend server, and it will be accessible at `http://localhost:5000`.

## Docker Integration

- Docker is used to provide runtime environments for the execution of code and testing assignments.
- Docker images for various programming languages are pulled, and containers are created using Dockerfiles and a `docker-compose.yml` file.
- Node.js communicates with Docker using child processes to execute code and obtain results.

## Usage

1. Teachers can log in to upload assignments, and students can log in to submit their assignments.
2. The backend, in conjunction with Docker, automatically tests assignments based on provided scenarios.
3. MongoDB stores assignment and user-related data.

## Contributing

Feel free to contribute by submitting bug reports, feature requests, or pull requests. Your input is highly valued!My whole working was at [ProGrade](https://github.com/prograde123) as it was a private project so all my commits can be viewed there

## Author

[Urooj-Shaukat]

If you have any questions or issues, please contact [prograde123@gmail.com].
