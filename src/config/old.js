require("dotenv").config();
const mysql = require("mysql2/promise");

const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
};

module.exports = connectToDatabase;
