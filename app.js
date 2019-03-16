const express    = require('express'),
      app        = express(),
      morgan     = require('morgan'),
      passport   = require('passport'),
      LocalStrategy =require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      bodyParser  = require('body-parser'),
      methodOverride  = require("method-override"),
      User       = require("./database/mongomodels/user.js"),
      request = require('request'),
      minify=require('harp-minify'),
      cheerio =require('cheerio'),
      find=require('cheerio-eq');

      
      
      
      
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method")); 
app.use(require('express-session')({
    secret:"RSquare Corporation will be there soon",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.static(__dirname + '/styles'));
app.use(morgan('combined'));



//  isloggedIn function -- checking for user logged in using session



function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
// -----------------------------------------------------------------------------------------------

app.get("/",function(req,res){
   res.render("index",{CurrentUser:req.user}); 
});



app.get("/scholarships",function(req,res){
    res.render("scholarships");
});







// api's

// api's from scholarships table

app.get("/newsupdate",function(req,res){
    var temp="";
      var url="https://scholarships.gov.in/";
      request(url,function(err,response,html){
        if(!err)
        {
          var $ = cheerio.load(html);
          var a =$(".marquee").eq(0).text().trim();
          console.log(a);
          temp=a;
          res.send(temp);  
        }
}); 



});










app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("server started");
});