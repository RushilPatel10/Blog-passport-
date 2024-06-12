const mongoose = require("mongoose");

const Database = async () => {
  await mongoose.connect(
    "mongodb+srv://patelrushil1510:FzFWhSVqWdiDwfHd@blog-nodejs.bkdkvn0.mongodb.net/?retryWrites=true&w=majority&appName=Blog-Nodejs"
  );
  console.log("Data base is connected");
};

module.exports = Database;
