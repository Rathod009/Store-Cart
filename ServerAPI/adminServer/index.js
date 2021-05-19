const express = require('express');

const app = new express();

const cors = require('cors');

app.listen(4002, ()=>{
    console.log("Server Started on 4002");
})

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

const route = require('./routes/admin.route');
app.use('/api/admin',route);