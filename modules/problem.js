
var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/com_code',{useNewUrlParser:true});
var conn=mongoose.connection;
var problemSchema=new mongoose.Schema({
pid:String,
name:String,
description:String,
testcases:Array,
expectedoutput:Array
});
var problemModel=mongoose.model("Problem",problemSchema);
module.exports=problemModel;
