var express = require("express");
var bcrypt = require("bcryptjs");
var router = express.Router();
var jwt = require("jsonwebtoken");
var validateToken = require("../middleware/validateToken")
var Customer = require("../domain/CustomerSchema");
var Token = require("../domain/TokenSchema");
const  {forgotPasswordSender, confirmationEmail} = require("../nodemailer/emailService")
var {generatePassword} = require("../utils/PasswordGenerator");

router.post("/api/auth/register", async (req, res) =>  {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password) {
        return res.status(400).send("Provide all fields before registering")
    };
    const existing_user = await Customer.findOne({email});
    if(existing_user) {
        return res.status(200).json({message: "Email address already taken" , error: "Authentication Error"});
        
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
            try {
                await confirmationEmail( customer.email, customer.name);
            } catch(err) {
                console.log(err);
            }

            return res.status(201
            ).json({
                id: customer._id,
                name: customer.name,
                email: customer.email,
                password: customer.password
            });
        }
        else {
            return  res.status(200).json({message: "Account could not be created!", error: "Authorization Error"});
        }
    }
})

router.post("/api/auth/login", async(req, res) => {
    const {email, password} = req.body;

    if( !email|| !password ) {
        return res.status(400).send("Provide all fields before registering");
    }
    try {
        const existing_customer = await Customer.findOne({email});
        if(!await bcrypt.compare(password, existing_customer.password)) {
            return res.status(200).json({message: "Incorrect Credentials!", error: "Authorization Error"});
        }

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
            return res.status(200).json({message: "Already logged in!", error: "Authentication Error"});
            /*
            return res.status(400).json ({
                message: "Already logged in!",
                accessToken: existing_customer.accessToken
            })
            */
        }
    
    } catch(err) {
        return res.status(200).json({message: "Incorrect Credentials!", error: "Authorization Error"});
    }
    
})

router.post("/api/auth/logout", validateToken, async(req, res) => {
    const {name, email, id} = req.customer;
    console.log(req.customer)
    
    const customer = await Customer.findOneAndUpdate({email}, {accessToken: null})
    
    console.log(customer);

    res.status(200).send("Logged out successfully");


})


router.patch("/api/auth/forgot-password", async(req, res) => {
    const {email} = req.body;

    
        const existing_customer = await Customer.findOne({email});
        
        if(existing_customer) {
            var generatedPassword = ''
           
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            
            for (let i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                
                generatedPassword += str.charAt(char)
            }
            console.log(generatedPassword);
            const hashedPassword = await bcrypt.hash(generatedPassword, 10);
            const updatedCustomer = await  Customer.findOneAndUpdate({email}, {password: hashedPassword}); 
            console.log("Updated customer: " + updatedCustomer)

            try {
                await forgotPasswordSender( existing_customer.email, existing_customer.name, generatedPassword);
            } catch(err) {
                console.log(err);
            }
            return res.status(200).json({message: "Password updated"});

            
        }else {
            return res.status(200).json({message: "Email could not be found", 
                error: "Authorization Error"})
        }

    
})

module.exports = router;