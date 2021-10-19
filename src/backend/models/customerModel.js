const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please enter your name"],
        trim:true
    },
    // email: {
    //     type: String,
    //     unique: true,
    //     trim: true
    // },
    // password : {
    //     type : String,
    //     required : [true,"Please enter your password"]
    // },
    // phoneNo : {
    //     type : Number,
    //     required : [true,"Please enter your Phone Number"],
    //     unique : true
    // },
    // photo : {
    //     type : String,
    //     default:"https://res.cloudinary.com/mycartdb/image/upload/v1621404771/frmr_vrycol.jpg"
    // },
    // gender : {
    //     type : String
    // },
    // location : {
    //     type: String
    // },
    // product : {
    //     type : String,
    // },
    // role:{
    //     type:Number,
    //     default : 0
    // },
    // isSeen :{
    //     type : Boolean,
    //     default:false
    // }
});

module.exports = mongoose.model('Customer',customerSchema);