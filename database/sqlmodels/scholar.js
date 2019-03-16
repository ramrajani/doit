var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'c9'
});

connection.connect();

module.exports={
    
    insert:function(req,res){
        
        
        
             
     connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
     if (error) throw error;
      console.log('The solution is: ', results[0].solution);
        });   
        
        
    },
    update:function(req,res){
        
        
        
    },
    extract:function(req,res){
        
        
        
        
        
    }
    
    
    
    
} 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});