## Description
This project is the backend that provides data about countries through a REST API. It is built with Express and uses `dotenv` for sensitive configurations.

## Prerequisites
- Node.js v18 or higher.
- npm or yarn for managing dependencies.

## Technologies Used
- **Express**: For creating the server.
- **CORS**: To enable cross-origin requests.
- **dotenv**: For environment variable configuration.

## Installation
1. Clone this repository.
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Configure a `.env` file in the root of the project:
   ```env
   PORT=4000
   ```

## Available Scripts
- **Start the server**:
  ```bash
  npm start
  ```
  This will start the server on the port specified in the `.env` file or `3000` by default.

## Endpoints
### Get Available Countries
- **Route**: `/api/available-countries`
- **Method**: GET
- **Description**: Returns a list of countries with their ISO codes.

### Get Country Information
- **Route**: `/api/country-info/:countryCode`
- **Method**: GET
- **Description**: Returns detailed information about a country based on its ISO code.

## Dependencies
```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.1"
}
```
