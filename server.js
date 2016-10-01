var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
var `article-one` : {
    title:'Article One | Sreejith',
    heading:'Article One',
    date:'oct 1',
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
</p> `
},
var `article-two` :{
    title:'Article two | Sreejith',
    heading:'Article two',
    date:'oct 1',
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
</p> `},
var `article-three` :{ 
    title:'Article three| Sreejith',
    heading:'Article three',
    date:'oct 1',
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
</p> `}
};

function createtemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate = 
`<html>
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
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
res.send('/:articleName', function(req,res) {
    var articlename = req.params.articleName;
  res.send(createtemplate(articles[articleNameres]));
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
