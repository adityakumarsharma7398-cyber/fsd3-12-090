# NPM Project
1. go to project folder ( by cd)
2. type ```npm intit -y```
3.  package.json 
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json

```
script {
    "start": "node app.js",
    "dev": :nodemon prg7.js"
}
```
7. add node_modules to .gitignore
6. npm run i  //it will download all essential files required to run files
8. to run use `npm run dev`

in type : common => means program through oops and module means porgram through script

## Rest API  (Representational State Transfer Application Programming Interface)
-majorly backed server return only data not html file
- REST API uses ( get , post , put , patch , delete) methon to communicate with client 
- any browser can check only get method
- for other methond type we use third party API tester like postman , thunder client , echo api etc

## Request Type 

### GET : getAll , getById
* `/api/products`  ( get all products )
* `/api/products/101` ( get product whose id is 101)

### POST :
* `/api/products` ( this means to add product in a database and  data will be shared from ecoAPI body section )

### PUT/PATCH : 
* `/api/products/201` ( to update the product in database whose id is 201 it will be updated in the body of ecoAPI )

### DELETE :
* `/api/product/110` ( to delete the product with id 110 )


> NOTE : exported functions can be imported by other functions 