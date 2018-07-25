let express = require("express");
let app = express();
let todoController = require("./controllers/todoController.js");

app.set("view engine", "ejs");

app.use(express.static("./public"));

todoController(app);

app.listen(3000);

console.log("listening to port 3000");
