const Router = require('./routes');
var express = require('express');
var app = express();
app.use(express.json());
app.use(Router);

app.listen(process.env.PORT)







