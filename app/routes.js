module.exports = (app) => {
	const App = require("./crud.js");

	app.post("/", App.code)
    app.get("/gen", App.generateCodes)
};