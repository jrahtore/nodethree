const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require('path');

app.get("/test.js", (req, res) => {
    res.sendFile(path.join(__dirname + '/test.js'))
})

app.get("/", (req, res) => {
    //res.render(path.join(__dirname + '/index.html'))
    const userid = req.query.id;
    console.log("id = "+userid)
    
    axios
      .post(
        "https://newyespoho.yespoho.com/catalog/getproductdetail?product_id=14461",
        { product_id: 1 },
        {
          headers: {
            "Content-Type": "application/json",
            Prefer: "return=representation",
            Merchantkey: "yespoho2022sandbox",
            Authkey: "e401f3a984ea392c80fe917e884ca912"
          }
        }
      )
      .then(({ data }) => {
        //var json = data;
        console.log(data)
        res.render(path.join(__dirname + '/index.ejs'),{dataJSON:data})
        // console.log(data);
        // res.send(data);
      });
      
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})