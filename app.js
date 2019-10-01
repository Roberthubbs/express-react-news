// const cookies = new Cookies(req.headers.cookie);
require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const customAuthMiddleWare = require('./server/middleware/custom-middleware');
const usersController = require('./server/controllers/user-controller');
const viewsController = require('./server/controllers/views_controller');
const https = require('https');
const db = require('./server/models/index')

// const apiResponse = () => https.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=5d8f7e7fb04d49f8b5afc10db6e05367", (res) => {
//     let data = '';

//     res.on('data', (chunk) => {
//         data += chunk
//     });

//     res.on('end', () => {
//         console.log(JSON.parse(data))
//     });
// }).on("error", (err) => {
//     console.log(err.message)
// });
// console.log(cookies.get('auth_token'))

app.use(logger('dev'));
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());
app.use(customAuthMiddleWare);


app.get('/', (req, res) => {
    
})
app.use(usersController);
app.use(viewsController);


// import Cookies from 'universal-cookie';

 
    


db.sequelize.sync({force: true}).then(() => {
    
    app.listen(port , () => {
        console.log(`App listening on PORT ${port}`)
    })
});
module.exports = app;