const express = require("express");
const app = express();

app.use(express.json()) ;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const db = require("./models");

const postRouter = require("./routes/Posts") ; 
app.use("/Posts", postRouter) ;

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running");
  });
});
