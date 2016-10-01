var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'Articleone | Sreejith',
    date:'oct 1',
    heading:'Article One',
    content:`<p>
This is the content.view more.This is the content.view more.
This is the content.view more.This is the content.view more.          
</p>
<p>
This is the content.view more.This is the content.view more.
This is the content.view more.This is the content.view more.          
</p>  
<p>
This is the content.view more.This is the content.view more.
This is the content.view more.This is the content.view more.          
</p> `,
};

function createTemplate(data){
    var tiltle=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate =`

<html>
<head>
<title> 
           ${title}
</title>    
<link href="/ui/style.css" rel="stylesheet" />    
</head>
  
  <body>
<div class="container"> 
     <div>
<a href="/">HOME </a>    
</div>    
<div>
<hr/>    
</div>
<div>
<h3>
          ${heading}   
</h3> 
</div>
<div>
          ${date}   
</div>
<div>
          ${content}
</div>
</div>    
</body>

</html>
`;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendfile(path.join(_dirname,'ui','index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function (req,res) {
   res.send(createTemplate(articleone));
});

app.get('/article-two', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article-three', function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
