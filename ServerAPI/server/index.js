const express = require('express');
//express instance
const app = express();
//connect db
const dbCon = require('./db_config');

//cors 
const cors = require('cors');

//select port
app.listen(4003, () => {
    console.log("Server started at port 4003")
});
app.use(cors());
//define bodyparser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())

//define router
const route = require('./routes/product.route');

app.use('/api' , route);

