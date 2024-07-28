
var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/com_code',{useNewUrlParser:true});
var conne=mongoose.connection;
var codeSchema=new mongoose.Schema({
username:String,
pid:String,
language:String,
code:String
});
var codeModel=mongoose.model("Code",codeSchema);
module.exports=codeModel;
