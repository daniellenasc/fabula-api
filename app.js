require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

require("./config/db.config")();

//ROTAS
//importar o bookRouter
const bookRouter = require("./routes/book.routes");
//toda rota "/book" que chegar, será encaminhada para bookRouter
app.use("/book-inventory", bookRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}.`);
});
