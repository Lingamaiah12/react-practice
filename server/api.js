var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();

app.use(express.json());

app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString).then(clientObject=>{
        var database = clientObject.db("reactdb");
        database.collection("tbluser").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
});

app.post("/registeruser",(req,res)=>{
  var userdetails = {
    UserId :req.body.UserId,
    UserName:req.body.UserName,
    Password:req.body.Password,
    Age:parseInt(req.body.Age),
    Mobile:req.body.Mobile
    }
    mongoClient.connect(connectionString,(err,clientObject)=>{
      if(!err){
        var database = clientObject.db("reactdb");
        database.collection("tbluser").insertOne(userdetails,(err,result)=>{
          if(!err){
            console.log("Record inserted");
          }
        })
      }
    })
})

app.listen(5050);
console.log('server started');