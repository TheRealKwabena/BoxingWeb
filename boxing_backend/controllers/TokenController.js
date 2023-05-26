var express = require("express");
var bcrypt = require("bcryptjs");
var router = express.Router();
var jwt = require("jsonwebtoken");
var validateToken = require("../middleware/validateToken")
var Customer = require("../domain/CustomerSchema");


router.post("/api/token", validateToken, async(req, res) => {
    
})