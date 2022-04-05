const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
	<body>
	    <a>I'm a Hero!!</a>
		<div id="container"></div>
		<script src="/static/bundle.js"></script>
	</body>
</html>
	`);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}.\n\nLoad it in your browser at http://localhost:${PORT}`))