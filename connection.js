const mongoose = require("mongoose");
require("dotenv").config();

const conectarDB = async () => {
  await mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
      .then(() => console.log("Connection on MongoDB"))
      .catch((err) =>
        console.error("Fatal error connection on MongoDB: ", err)
      ),
  });
};
