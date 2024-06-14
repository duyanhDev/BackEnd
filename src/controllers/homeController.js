const connectToDatabase = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");
const getHomepage = (req, res) => {
  res.render("sample.ejs");
};

const getABC = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [results, fields] = await connection.query("SELECT * FROM `Users`");
    res.json({ results });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getHome = (req, res) => {
  res.render("sample.ejs");
};

const HomePage = async (req, res) => {
  const rows = await getAllUsers();
  res.render("Home.ejs", { listUsers: rows });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  const connection = await connectToDatabase();
  try {
    await connection.query(
      `
      INSERT INTO Users (email, name, city)
      VALUES (?, ?, ?);
      `,
      [email, name, city]
    );
    res.send("Create user succeeded");
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getCreate = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getHome,
  HomePage,
  postCreateUser,
  getCreate,
};
