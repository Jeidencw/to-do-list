require('dotenv').config(); 
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db")

connectToDb();
const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
//conecta os arquivos estaticos (css, html) na pasta join (a propria pasta do projeto) e entra na pasta public
app.use(express.static(path.join(__dirname, "public")));
//faz com que seja possivel receber as informações do index.ejs
app.use(express.urlencoded());
app.use(routes);


//ROTA
//Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
//GET - Pega uma info
//POST - Cria uma info
//PUT - Altera toda a info
//PATH - Altera parte da info
//DELETE - Apaga uma info

//Name - um identificador da rota

//function(calback)

//     requisição, resposta

app.listen(port, () =>
  console.log(`Servidor esta rodando em http//localhost:${port}`)
);
