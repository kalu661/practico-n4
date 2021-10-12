// Importacion de librerias
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

require("./connection");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//Settings
app.set("port", process.env.PORT || 3000);

//Routes
// app.use(require("./routes/user.routes"));
// app.use("/api/auth", require("./routes/auth.routes"));

app.listen(app.get("port"), () =>
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
);
