var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.json());

var posts = [
	{
		id : 1,
		name : "Avadhut",
		body : "Post one",
	},
	{
		id : 2,
		name : "Alex",
		body : "Post two",
	},
	{
		id : 3,
		name : "John",
		body : "Post Three",
	},
	{
		id : 4,
		name : "Deo",
		body : "Post Four",
	}
]

app.get("/posts",function(req,res){
	res.end(JSON.stringify(posts));
});

app.post("/posts",function(req,res){
	posts.push(req.body);
	res.end(JSON.stringify(posts));
});

app.put("/posts/:id",function(req,res){
	for(i=0;i<posts.length;i++){
		if(posts[i].id == req.params.id){
			posts[i] = req.body;
			break;
		}
	}
	res.end(JSON.stringify(posts));
});

app.delete("/posts/:id",function(req,res){
	for(i=0;i<posts.length;i++){
		if(posts[i].id == req.params.id){
			posts.splice(i,1);
			break;
		}
	}
	res.end(JSON.stringify(posts));
});

var server = app.listen(8081,function(){
	console.log("Listning....")
})