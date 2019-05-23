# write-api-using-nodejs
Writing API using nodejs (eg. GET/POST/PUT/DELETE) 

Que:
How to create/Write API using node.

Ans:
To write and API in nodejs is very easy. Just follow the following few steps.

1) Install Express using the following command.
   - npm install express

Express help us to build the API in node. For eg. We can easily access the Route and Body Parmas using express. Express provides may more features but Here we are satisfied with Route and Body Params only.

2) Install CORS using following command.
   - npm install googleapis

Using CORS, We can be able to access/deny the request from specified domain/IP.


3) Run 
   - node index.js

Using the above command, We can be able to publish our API.

Following are the Examples to access the API
1) GET Method
URL: http://localhost:8081/posts

   - This is the simple GET request, Here we are showing all the posts stored in posts variable

2) POST Method
URL: http://localhost:8081/posts
Parameters: {
        "id": 5,
        "name": "Avadhut",
        "body": "Post one"
    }
Headers : 
	Content-Type: application/json

   - This is the simple POST request, Here we are showing sending an one JSON object to the API and this object will be added in the posts variable and returns all the posts are stored in posts variable.

3) PUT Method
URL: http://localhost:8081/posts/5
Parameters: {
        "id": 5,
        "name": "Avadhut",
        "body": "Post five"
    }
Headers : 
	Content-Type: application/json

   - This is the simple PUT request, Here we are showing sending an one JSON object to the API and this object will be replaced if the id provided in URL mataches to the id stored in the objects of posts variable and returns the all posts.

4) DELETE Method
URL: http://localhost:8081/posts/5

   - This is the simple DELETE request, This API will delete the object if the post id is matches to the id provided in URL and returns the remaning posts.


Here you go,

Best Luck