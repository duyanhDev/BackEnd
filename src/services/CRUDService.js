const connectToDatabase = require("../config/database");

const getAllUsers = async () => {
  const connection = await connectToDatabase();
  const [rows, fields] = await connection.query("SELECT * FROM `Users`");
  return rows;
};

module.exports = {
  getAllUsers,
};
