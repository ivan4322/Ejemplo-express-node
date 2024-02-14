Este es un repo que tiene su guía con el video en youtube: https://www.youtube.com/watch?v=H9M02of22z4&t=117s

Se crea un backend en node-express js con mongodb para que sirva de ejemplo y guía para el backend del proyecto final. 

Clonamos el repo, y corremos npm install 

1) Ponemos a correr el proyecto con npm run dev
2) Revisar, y verificar con thunder client que los diferentes endpoints funcionan hasta este punto.
   - hacer las peticiones del CRUD al
   - GET -> http://localhost:5000/api/contacts/
   - GET -> http://localhost:5000/api/contacts/1
   - POST -> http://localhost:5000/api/contacts/
     {
    	"name": "Santiago",
    	"email": "santi@gmail.com",
    	"phone" : "0123456"
    }
   - DELETE -> http://localhost:5000/api/contacts/1
   - PUT -> http://localhost:5000/api/contacts/
3) Creamos el cluster en MONGO ATLAS
   Creamos el cluster, la BD y la coleccion

  -Nos conectamos al cluster por el plugin de vs code
   URL -> buscamos la url en MONGO ATLAS por medio de monogo compass

  -Nos conectamos por medio del driver 
   URL -> buscamos la url en MONGO ATLAS por medio de los 
   
  -creamos el .env:
  PORT = 5000
  CONNECTION_STRING=URL

4) Para conectarnos con nuestra base de datos de mongo db, necesitamos mongoose que es un objeto para crear los schemas de nuestras entidades. 
  corremos -> npm i mongoose 
  creamos la carpeta config y dentro dbConnection.js:

  const mongoose = require('mongoose')
  const connectDB = async () => {
      try {
          const connect = await mongoose.connect(process.env.CONNECTION_STRING);
          console.log("Database connected: ", connect.connection.host, connect.connection.name);
      }catch(err){
          console.log(err);
          process.exit(1);
      }
  }
  module.exports = connectDB;


5) nos vamos para el server.js a llamar connectDB

  const express = require("express");
  const errorHandler = require("./middleware/errorHandler");
  const connectDB = require("./config/dbConnection");
  const dotenv = require("dotenv").config();
  
  connectDB();        ---------- HERE -----------
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json())
  // use are known as middleware
  app.use("/api/contacts", require("./routes/contactRoutes"));
  app.use(errorHandler);
  
  
  app.listen(port, () => {
      console.log(`Server running on port ${port}`);
  })


6) Ahora lo que vamos hacer es crear nuestros schemas 
Creamos la carpeta models y dentro el contactModel.js:

  const mongoose = require('mongoose')
  
  const contactSchema = mongoose.Schema({
      name: {
          type: String,
          required: [true, "Please add the contact name"]
      },
      email: {
          type: String,
          required: [true, "Please add the email address"]
      },
      email: {
          type: String,
          required: [true, "Please add the contact phone number"]
      },
      },
      {
          timestamps: true
      }
  );
  
  module.exports = mongoose.model("Contact", contactSchema);

 
