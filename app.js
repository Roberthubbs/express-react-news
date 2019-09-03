const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./server/models/index')
const app = express();
const force = true;
const cookieParser = require('cookie-parser');
const customAuthMiddleWare = require('./server/middleware/custom-middleware');
app.use(logger('dev'));

const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.get('*', (req, res) => res.status(200).send({
//     message: 'beginning app'
// }));
app.use(cookieParser());
app.use(customAuthMiddleWare);
db.sequelize.sync({ force: true }).then(() => {
    app.listen(port , () => {
        console.log(`App listening on PORT ${port}`)
    })
});
module.exports = app;