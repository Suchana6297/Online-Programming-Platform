
var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/com_code',{useNewUrlParser:true});
var conne=mongoose.connection;
var scoreSchema=new mongoose.Schema({
username:String,
score:Number,
});
var scoreModel=mongoose.model("Score",scoreSchema);
module.exports=scoreModel;
