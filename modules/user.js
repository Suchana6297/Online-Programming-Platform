var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/com_code',{useNewUrlParser:true});
var conn=mongoose.connection;
var userSchema=new mongoose.Schema({
firstname:String,
lastname:String,
username:String,
contactno:String,
password:String
});
var userModel=mongoose.model("User",userSchema);
module.exports=userModel;