# Country Information Application

This repository contains a full-stack application that provides detailed information about countries. It includes a React-based frontend and an Express-based backend.

## Features

### Frontend
- **UI**: Built with React.
- **Data Visualization**: Uses Recharts for visualizing country-related data.
- **Routing**: React Router for seamless navigation.

### Backend
- **RESTful API**: Provides endpoints to fetch country data and detailed information.
- **Data Aggregation**: Combines multiple APIs to deliver enriched country information.
- **CORS Enabled**: Ensures cross-origin requests are handled correctly.

---

## Installation and Setup

### Prerequisites
- Node.js v18 or higher.
- npm or yarn for dependency management.

### Clone the Repository
```bash
git clone https://github.com/yourusername/country-info-app.git
cd country-info-app
```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following content:
   ```env
   PORT=4000
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will run at `http://localhost:4000`.

---

## API Endpoints

### Get Available Countries
- **Route**: `/api/available-countries`
- **Method**: GET
- **Description**: Retrieves a list of countries with their ISO codes.

### Get Country Information
- **Route**: `/api/country-info/:countryCode`
- **Method**: GET
- **Description**: Provides detailed information about a country based on its ISO code.

---

## Dependencies

### Frontend
- `react`
- `react-dom`
- `react-router-dom`
- `recharts`

### Backend
- `express`
- `cors`
- `dotenv`

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your fork.
4. Create a pull request to the main repository.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any questions or feedback, please open an issue or reach out via [eguimaraz@gmail.com](mailto:eguimaraz@gmail.com).

