const mongoose = require("mongoose");

const Student = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true}
});


module.exports = mongoose.model("student",Student);