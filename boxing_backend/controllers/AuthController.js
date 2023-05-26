var express = require("express");
var bcrypt = require("bcryptjs");
var router = express.Router();
var jwt = require("jsonwebtoken");
var validateToken = require("../middleware/validateToken")
var Customer = require("../domain/CustomerSchema");
var Token = require("../domain/TokenSchema");

router.post("/api/auth/register", async (req, res) =>  {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password) {
        return res.status(400).send("Provide all fields before registering")
    };
    const existing_user = await Customer.findOne({email});
    if(existing_user) {
        return res.status(400).send("Email address already taken");
    }
    else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const customer = await Customer.create({
            name,
            email, 
            password: hashedPassword
        });
        if(customer) {
            console.log(customer)
            return res.status(201).json({
                id: customer._id,
                name: customer.name,
                email: customer.email,
                password: customer.password
            });
        }
        else {
            return res.status(400).send("Account could not be created")
        }
    }
})

router.post("/api/auth/login", async(req, res) => {
    const {email, password} = req.body;

    if( !email|| !password ) {
        return res.status(400).send("Provide all fields before registering");
    }
    const existing_customer = await Customer.findOne({email});

    if(existing_customer && existing_customer.accessToken === null && await bcrypt.compare(password, existing_customer.password)) {
        const access_token = jwt.sign({
            customer: {
                name: existing_customer.name,
                email: existing_customer.email,
                id: existing_customer._id
            },
            
        },
        process.env.SECRET_KEY,
        {expiresIn: '1h'})
        const new_customer = await Customer.findOneAndUpdate({email}, {accessToken: access_token});
        res.status(200).json({
            id: new_customer._id,
            email: new_customer.email,
            accessToken: access_token
        })
    }
    else if(existing_customer.accessToken !== null) {
        return res.status(400).send("Already logged in!");
        /*
        return res.status(400).json ({
            message: "Already logged in!",
            accessToken: existing_customer.accessToken
        })
        */
    }
    else {
        return res.status(400).send("Email or password is not correct");
    }
})

router.post("/api/auth/logout", validateToken, async(req, res) => {
    const {name, email, id} = req.customer;
    console.log(req.customer)
    
    const customer = await Customer.findOneAndUpdate({email}, {accessToken: null})
    
    console.log(customer);

    res.status(200).send("Logged out successfully");


})

module.exports = router;