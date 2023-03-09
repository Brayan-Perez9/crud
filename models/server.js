const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();

class server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.userPath = "/api/user";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body 
    this.app.use( express,json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("app corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = server;
