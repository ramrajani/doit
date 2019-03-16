const request = require('request'),
      minify=require('harp-minify'),
      cheerio =require('cheerio'),
      find=require('cheerio-eq');
      
      
      
      var url="https://scholarships.gov.in/";
      request(url,function(err,response,html){
        if(!err)
        {
          var $ = cheerio.load(html);
          var a =$(".marquee").eq(0).text().trim();
          console.log(a);
        }
}); 