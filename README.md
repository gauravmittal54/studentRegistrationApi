# Student Registration API

This is a simple RESTful API for managing student registration information. It allows you to perform CRUD (Create, Read, Update, Delete) operations on student data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new student records with name, email, phone, and address.
- Retrieve a list of all students or fetch student details by ID or name.
- Update student records using their ID.
- Delete student records by ID.

## Prerequisites

- Node.js (>= 14.x)
- MongoDB server (running locally or remotely)

## Installation

1. Clone this repository:
git clone https://github.com/gauravmittal54/studentRegistrationApi.git

2. Navigate to the project directory:
cd studentRegistrationApi

3. Install the dependencies:
npm install

## Usage
Start the server:
npm start
The API will be available at http://localhost:3000 by default.

Use API endpoints to manage student records. Refer to the Endpoints section for detailed information on available routes.

## Endpoints
- POST /students: Create a new student record.
- GET /students: Retrieve a list of all students.
- GET /student/id/:id: Fetch student details by ID.
- GET /student/name/:name: Fetch student details by name.
- PATCH /students/id/:id: Update student details by ID.
- DELETE /student/id/:id: Delete a student record by ID.


## Dependencies
- Express.js: Web framework for building the API.
- Mongoose: MongoDB object modeling for managing data.
- Validator: Library for data validation and sanitization.
- Nodemon (dev dependency): Automatically restarts the server during development.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

