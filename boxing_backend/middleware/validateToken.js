const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).send("Customer is not authorized");
        }
        else {
            req.customer = decoded.customer;
            next();
        }
        

    }
    if(!token) {
        return res.status(401).send("Customer is not authorized");
    }
    
})
module.exports = validateToken;