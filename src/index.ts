import dotenv from 'dotenv';
import express from 'express';

// Start the express serve
const app = express();

// Load environment variables from .env file
dotenv.config({
  path: './.env',
});

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Health endpoint to check server status and version information
app.get('/health', (req, res) => {
  res.json({
    message: 'Server is up and running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
