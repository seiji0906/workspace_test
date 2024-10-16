# workspace_test

## Project Description

This project is a Rails+React application that displays dynamic graphs using Chart.js. The purpose of this application is to allow users to visually inspect data through various types of graphs, such as line charts, bar charts, and pie charts. The backend API is built with Rails, and the frontend is built with React. Docker Compose is used to automate the environment setup and ensure consistency across development environments.

## Requirements

### Functional Requirements

1. Data Input and Processing
   - Use the Rails backend API to fetch and process data from external data sources (e.g., file uploads or API requests).
   - Convert the data into a format suitable for Chart.js graph rendering.

2. Graph Display
   - Use Chart.js to display multiple types of graphs (e.g., line charts, bar charts, pie charts).
   - Use React for the frontend, with component-based dynamic graph updates as needed.

3. Interactive Operations
   - Allow users to specify filters and parameters to change the data range and type of graphs displayed in real-time.

4. Responsive Design
   - Implement a responsive design to support different device sizes, such as smartphones and tablets.

5. Graph Export Functionality
   - Provide a feature for users to export graphs as images or PDFs.

### Non-Functional Requirements

1. Performance
   - Implement data caching as needed to ensure smooth graph rendering, even with large datasets.

2. Security
   - Implement necessary security measures, such as authentication and authorization (if required), API error handling, and data protection.

3. Scalability
   - Design the application with modularity and componentization in mind to accommodate future feature additions and increased data volume.

## Development Environment Setup

### Prerequisites

- Docker
- Docker Compose

### Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/seiji0906/workspace_test.git
   cd workspace_test
   ```

2. Build and start the Docker containers:

   ```sh
   docker-compose up --build
   ```

3. The Rails backend will be available at `http://localhost:3000`, and the React frontend will be available at `http://localhost:3001`.

## Running the Application

### Rails Backend

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Start the Rails server:

   ```sh
   rails server
   ```

### React Frontend

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Start the React development server:

   ```sh
   npm start
   ```

## Accessing the Application

1. Open your web browser and go to `http://localhost:3001` to access the React frontend.
2. The frontend will fetch data from the Rails backend API and render the Chart.js graphs.

## Viewing the Graphs

1. The application will display various types of graphs based on the data fetched from the backend.
2. Users can interact with the graphs by specifying filters and parameters to change the data range and graph types in real-time.
3. The application supports responsive design, ensuring a seamless experience across different devices.
4. Users can export the graphs as images or PDFs using the provided export functionality.
