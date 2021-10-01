
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

const express = require('express')
const app = express()



const hbs				= require('express-handlebars');

app.engine('hbs', hbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.use(express.json());




//using post function 
//I create a route "/add_user" to add a new user to database
app.get('/', async (request, response) => {
    response.render('home.hbs')
});
module.exports = app;