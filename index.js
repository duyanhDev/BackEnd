require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const WebRoutes = require("./src/routes/web");
const connectToDatabase = require("./src/config/database");
const app = express();
const port = process.env.PORT || 8080;

// config data form

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
// Config view engine and routes
configViewEngine(app);
app.use("/", WebRoutes);

// Create the connection to database and execute query
const initializeDatabase = async () => {
  try {
    const connection = await connectToDatabase();
    const [results, fields] = await connection.query("SELECT * FROM `Users`");
  } catch (err) {
    console.error("Error during database initialization:", err);
  }
};

// Call the function to connect to the database
initializeDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
