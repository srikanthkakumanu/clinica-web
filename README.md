# Clinica Web

A React Native Web application for managing clinics and doctors through the Clinica and Doctr microservices.

## Overview

This application provides a user-friendly interface to perform CRUD (Create, Read, Update, Delete) operations on clinics and doctors. It interacts with two Spring Boot microservices:

- **Clinica Microservice**: Manages clinic data (GitHub: https://github.com/srikanthkakumanu/clinica)
- **Doctr Microservice**: Manages doctor data (GitHub: https://github.com/srikanthkakumanu/doctr)

## Features

- **Clinic Management**: Create, view, update, and delete clinics
- **Doctor Management**: Create, view, update, and delete doctors
- **Pagination**: Supports paginated lists for large datasets
- **Responsive UI**: Built with React Native Web for cross-platform compatibility
- **Authentication**: Handles HTTP Basic Authentication for API calls

## Prerequisites

- Node.js 18 or later
- The Clinica and Doctr microservices running locally
  - Clinica: http://localhost:9091
  - Doctr: http://localhost:9092

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd clinica-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Ensure the microservices are running:

   - Start Clinica microservice on port 9091
   - Start Doctr microservice on port 9092

2. Start the web application:

   ```bash
   npm run web
   ```

3. Open your browser and navigate to the provided URL (usually http://localhost:8081)

## Usage

- **Home Screen**: Choose to manage Doctors or Clinics
- **List Screens**: View paginated lists with options to add, edit, or delete items
- **Form Screens**: Create new or edit existing records

## API Integration

The app uses the following API endpoints:

### Clinica Microservice (Port 9091)

- `GET /api/clinics` - List clinics with pagination
- `GET /api/clinics/{id}` - Get clinic by ID
- `POST /api/clinics` - Create new clinic
- `PUT /api/clinics/{id}` - Update clinic
- `DELETE /api/clinics/{id}` - Delete clinic

### Doctr Microservice (Port 9092)

- `GET /api/doctors` - List doctors with pagination
- `GET /api/doctors/{id}` - Get doctor by ID
- `POST /api/doctors` - Create new doctor
- `PUT /api/doctors/{id}` - Update doctor
- `DELETE /api/doctors/{id}` - Delete doctor

Authentication uses HTTP Basic Auth with default credentials.

## Technologies Used

- React Native
- React Native Web
- React Navigation
- Expo
- Fetch API for HTTP requests

## Project Structure

```
src/
├── screens/
│   ├── HomeScreen.js
│   ├── DoctorListScreen.js
│   ├── DoctorFormScreen.js
│   ├── ClinicListScreen.js
│   └── ClinicFormScreen.js
└── services/
    └── api.js
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
