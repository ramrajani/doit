var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'c9'
});

var csv = require('csv');
// loads the csv module referenced above.

var obj = csv();
// gets the csv module to access the required functionality

function MyCSV(Fone, Ftwo, Fthree,Ffour,Ffive,Fsix,Fsev,Feight,Fnine,Ften,Feleven,Ftwelve,Fthirteen,Ffourteen,Ffifteen) {
   this.FieldOne = Fone;
   this.FieldTwo = Ftwo;
   this.FieldThree = Fthree;
   this.FieldFour = Ffour;
   this.FieldFive = Ffive;
   this.FieldSix = Fsix;
   this.FieldSeven = Fsev;
   this.FieldEight = Feight;
   this.FieldNine = Fnine;
   this.FieldTen = Ften;
   this.FieldEleven = Feleven;
   this.FieldTwelve = Ftwelve;
   this.FieldThirteen = Fthirteen;
   this.FieldFourteen = Ffourteen;
   this.FieldFifteen = Ffifteen;


};
// Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.

var MyData = [];
var num_of_rows=0;
// MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP.
//Write the your appropriate filename
obj.from.path('sch.csv').to.array(function (data) {
   num_of_rows=data.length;
   for (var index = 0; index < data.length; index++) {
       MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2],data[index][3],data[index][4],data[index][5],data[index][6],data[index][7],data[index][8],data[index][9],data[index][10],data[index][11],data[index][12],data[index][13],data[index][14],data[index][2],data[index][2]));
   }
   
// pushing into database


 for(var j=26;j<27;j++){


     con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
          var sql = 'INSERT INTO schol  VALUES('+parseInt(MyData[j].FieldOne,10)+',\''+MyData[j].FieldTwo+'\',\''+MyData[j].FieldThree+'\',\''+MyData[j].FieldFour+'\',\''+MyData[j].FieldFive+'\',\''+MyData[j].FieldSix+'\',\''+MyData[j].FieldSeven+'\',\''+MyData[j].FieldEight+'\',\''+MyData[j].FieldNine+'\',\''+MyData[j].FieldTen+'\','+parseInt(MyData[j].FieldEleven)+',\''+MyData[j].FieldTwelve+'\',\''+MyData[j].FieldThirteen+'\',\''+MyData[j].FieldFourteen+'\',\''+MyData[j].FieldFifteen+'\')';
                console.log(sql);
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        });
        });

       
     
 }


});









