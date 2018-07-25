let data = [{item:"Dance"},{item:"Study"}, {item:"Buy milk"}];
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app) => {
	app.get("/todo", (req, res) => {
		res.render("todo.ejs", {todos:data});
	});
	app.post("/todo", urlencodedParser ,(req, res) => {
		console.log(req.body);
		data.push(req.body);
	});
};
