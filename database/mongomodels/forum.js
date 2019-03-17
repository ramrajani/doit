var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doitdb',{ useNewUrlParser: true });
var ForumSchema = new mongoose.Schema({
    id:Number,
    question: [{
        qnumber:Number,
        qtext:String,
        answers:[{
            ansno:Number,
            anstext:String
        }]
    }]

});


module.exports =mongoose.model("Forum",ForumSchema);

