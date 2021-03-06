// const cookies = new Cookies(req.headers.cookie);
// import { findAndClearArticles } from './server/controllers/articles-controller';
require('dotenv').config()
const cors = require('cors')

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
// app.use(cors({credentials: true}));
const path = require('path')
const cookieParser = require('cookie-parser');


const usersController = require('./server/controllers/user-controller');
const articlesController = require('./server/controllers/articles-controller');
const viewsController = require('./server/controllers/views_controller');
const commentsController = require('./server/controllers/comments-controller');
const likesController = require('./server/controllers/likes-contoller.js');
const followsController = require('./server/controllers/follows-controller.js');
const https = require('https');
const db = require('./server/models/index');
if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static(path.join(__dirname, 'client/build')))
    
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname + '/client/build/index.html'))
    // })
}
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    })
    next();
});
app.use(logger('dev'));


const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());
// app.use(customAuthMiddleWare);



app.use(usersController);

app.use(articlesController);

app.use(viewsController);

app.use(commentsController);
app.use(likesController);
app.use(followsController);
// app.set('views', path.join(__dirname, 'client'))
// import Cookies from 'universal-cookie';

db.sequelize.query(`SELECT id FROM "Articles" WHERE "Articles".id not in (SELECT post_id FROM "Comments");`, {raw: true}).then((res) => {
    
    let ohMyGodThisWillBeSoSlow = [];
    res[0].forEach((result) => {
        ohMyGodThisWillBeSoSlow.push(result.id)
    })
    db.sequelize.models.Article.destroy({
        where: {
            id: ohMyGodThisWillBeSoSlow,
            createdAt: new Date((new Date()).getTime() - (86400000 * 5))
        }
    }).then((deleted) => {
        
        console.log(deleted)
    })
})
// console.log(db.sequelize.models.Article)
// findAndClearArticles();
    


db.sequelize.sync().then(() => {
    
    app.listen(port , () => {
        console.log(`App listening on PORT ${port}`)
    })
});
module.exports = app;