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
3) Creamos el cluster en MONGO ATLAS, la BD y la coleccion

  -Nos conectamos al cluster por el plugin de vs code
   URL -> buscamos la url en MONGO ATLAS por medio de monogo compass

  -Nos conectamos por medio del driver 
   URL -> buscamos la url en MONGO ATLAS por medio de los drivers
   
  -creamos el .env:
  PORT = 5000
  CONNECTION_STRING=URL

4) Para conectarnos con nuestra base de datos de mongo db, necesitamos mongoose que es un objeto para crear los schemas de nuestras entidades. 
  corremos -> npm i mongoose 
  creamos la carpeta config y dentro dbConnection.js:
   ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/0cca3032-cba5-4c83-b14d-77e0d452a5ea)

5) nos vamos para el server.js a llamar connectDB , y deberíamos ver en la consola que nos conectamos al cluster
   ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/f53df39c-d493-48d3-9a71-ee64fb430f86)

6) Ahora lo que vamos hacer es crear nuestros schemas 
Creamos la carpeta models y dentro el contactModel.js:
![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/1c735752-acb3-4b89-9019-c222d0b8ec87)

7) Ahora vamos a ir modificando y creando todo nuestro CRUD. Modificamos el contactController.js para ensayar la conexion : 
8) hacemos la peticion GET en thunder client y debe retornar un array vacío []
   ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/09706a5c-1ebd-4dac-9be8-f8253b2b59b7)

9) hacemos la peticion POST en thunder client y debe retornar el contacto que creamos 
   ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/cd319a82-558e-4993-b8a9-13d039343db6)
   ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/e5466ed6-7dc7-461a-87b8-5d1042998f51)
10) hacemos la peticion GET by ID en thunder client y debe retornar el contacto que buscamos, o el error de que no encontró nada
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/cd4e9d07-6564-4a26-9606-17fcc18d33cf)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/e73af1b5-357f-4ed4-9a4e-355f9ea17771)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/10e09823-d5a1-4891-af26-cc32f9204e7e)

11) hacemos la peticion PUT by ID en thunder client y debe retornar el contacto actualizado o el error que no encontró nada
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/d7e9bbb0-fab5-4072-84f5-352c52867adf)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/d2da8019-2cae-486e-88c5-c29aaa47cb05)

12) hacemos la peticion DELETE by ID en thunder client y debe retornar el contacto que acabamos de borrar o el error correspondiente
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/08439bb5-335c-4351-9917-490414816fd2)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/cae29d2a-45a2-4df1-9a70-f1a1ddd33c95)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/e95c5d95-696f-4d3c-889c-b3a9e61e13e3)
    ![image](https://github.com/Academy-CodigoC13/ejemplo-node-express/assets/61909114/71d93d83-a4fb-4ba1-8a36-888d28613279)

Con estos pasos tendríamos un CRUD básico para trabajar.


    







 
