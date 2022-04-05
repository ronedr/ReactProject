const express = require("express");
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.status(500).json({ error: 'message' })
// )
app.listen(3000);
