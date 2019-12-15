'use strict';
var multer = require('multer');
var express = require('express');
var cors = require('cors');
var upload = multer()
// require and use "multer"...
const bodyParser= require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

//mycode
app.post('/api/fileanalyse',upload.single('upfile'), function(req, res) {
    /*{"name":"Deneme.txt","type":"text/plain","size":989}*/
    let name = req.file.originalname;
    let type = req.file.mimetype	;
    let size = req.file.size
    res.json({"name":name, "type":type, "size":size});
    })
    

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
