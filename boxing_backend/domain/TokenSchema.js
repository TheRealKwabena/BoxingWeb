var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var tokenSchema = new Schema({
    accessToken: {
        type: String
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
})


module.exports = mongoose.model("Token", tokenSchema);