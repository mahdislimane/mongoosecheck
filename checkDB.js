const mongoose = require("mongoose");
class Database {
  constructor() {
    this._connect;
  }
  _connect() {
    mongoose
      .connect(
        `mongodb+srv://MahdiKazama:Mahdi1986@cluster0.yqd8f.mongodb.net/test`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      )
      .then(() => {
        console.log("Database connected");
      })
      .catch(() => {
        console.log("Database connection error");
      });
  }
}
module.exports = new Database();
