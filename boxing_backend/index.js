require('dotenv').config();


var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var morgan = require("morgan");
var path = require("path");
var history = require("connect-history-api-fallback");



//Exporting the controllers
var AuthController = require("./controllers/AuthController");
var CustomerController = require("./controllers/CustomerController");
const app = express();
var mongoURI = process.env.DATABASE_URL || "mongodb+srv://kwabenaa:Twumasierica1234.@cluster0.jdvtaxw.mongodb.net/";


// Connect to MongoDB
mongoose.connect(mongoURI);
const database = mongoose.connection
database.on('error', (error) => {
    
    console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
    console.error(error.stack);
    process.exit(1);
})

database.once('connected', () => {
    console.log(`Connected to MongoDB`)
})

app.use(express.json());



app.listen(8080, () => {
    console.log(`Server running at port ${8080}`);
})

// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan("dev"));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options("*", cors());
app.use(cors());

// Import routes
app.get("/api", function (req, res) {
    res.json({ message: "Welcome to your DIT342 backend ExpressJS project!" });
  });

app.route("/api/auth/register").all(AuthController);
app.route("/api/auth/login").all(AuthController);
app.route("/api/auth/logout").all(AuthController);
app.route("/api/auth/forgot-password").all(AuthController);
app.route("/api/customers").all(CustomerController);
app.route("/api/currentuser").all(CustomerController);

//app.route("/api/customers/:id").all(CustomerController);

module.exports = app;