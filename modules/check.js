
var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/com_code',{useNewUrlParser:true});
var conne=mongoose.connection;
var checkSchema=new mongoose.Schema({
pid:String,
username:String,
score:Number,
hasSolved:Boolean
});
var checkModel=mongoose.model("Check",checkSchema);
module.exports=checkModel;
