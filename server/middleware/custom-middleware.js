const { User, AuthToken } = require('../models');

module.exports = async function(req, res, next ){
    // console.log(req, res)
    
    const token = req.cookies.auth_token || req.headers.authorization;

    if (token) {
        const authToken = await AuthToken.find(
            { where: { token }, include: User }
        );

        if (authToken){
            req.user = authToken.user;
        }
    };
    next();
}