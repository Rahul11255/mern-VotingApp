const mongoose = require("mongoose");

const db = mongoose
  .connect(process.env.MONGO_DB_LOCAL_URL, {
    //   useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;

// rr710505
// 

