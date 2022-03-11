const express = require('express');
const path = require('path');
const logger = require("morgan");
const routes = require('./routes/routes');

const app = express();
const port  = 3000;

app.use(logger("dev"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(routes);


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));