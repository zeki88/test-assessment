## Description
This project is the frontend of an application that allows users to view country information using React, React Router, and data visualization libraries such as Recharts and @mui/x-charts.

## Prerequisites
- Node.js v18 or higher.
- npm or yarn for managing dependencies.

## Technologies Used
- **React**: Core library for building the user interface.
- **React Router**: For handling routing within the application.
- **Recharts** and **@mui/x-charts**: Tools for data visualization.
- **Emotion**: For component styling.

## Installation
1. Clone this repository.
2. Navigate to the project directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts
- **Start the development server**:
  ```bash
  npm run dev
  ```
  This will start the development server at `http://localhost:5173` (or a port determined by Vite).

- **Build for production**:
  ```bash
  npm run build
  ```

- **Preview the production build**:
  ```bash
  npm run preview
  ```

## Dependencies
### Production
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.0.2",
  "recharts": "^2.14.1"
}
```

### Development
```json
{
  "@eslint/js": "^9.15.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "vite": "^6.0.1"
}
```
