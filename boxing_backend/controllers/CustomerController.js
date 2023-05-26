var express = require("express");
var router = express.Router();

var Customer = require("../domain/CustomerSchema");
var validateToken = require("../middleware/validateToken")

router.post("/api/customers", async(req, res) => {
    const {name, email, password} = req.body;

    if(!name|| !email|| !password) {
        return res.status(400).send("Provide all fields before registering");
    }
    const existing_customer = await Customer.findOne({email});
    if(existing_customer) {
        return res.status(400).send("Email already taken");
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
                email: customer.email,
                password: customer.password
            });
        }
        else {
            return res.status(400).send("Account could not be created")
        }
    }
})

router.get("/api/customers", async(req, res) => {
    const customers = await Customer.find({});
    return res.status(200).json({customers: customers});
})

router.get("/api/currentuser", validateToken, async(req, res) => {
    return res.status(200).json(req.customer)
})

module.exports = router;