const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// define a route that accepts POST requests
app.get('/api/v1/create-script', function (req, res) {
  const resources = req.body
  resources.array.forEach(element => {
    const resource_name=element.resource_name
    //search resource name in database
    //retrieve resource boilerplate
    //fill up the resource attributes
    //ignore non-required not specified attributes
  });
  res.send(`resource "aws_vpc" "main" {
    cidr_block       = "10.0.0.0/16"
    instance_tenancy = "default"
  
    tags = {
      Name = "main"
    }
  }`)
})

// start the server
app.listen(3000, function () {
  console.log('Server started on port 3000')
})
