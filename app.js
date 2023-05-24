const express = require("express");
const app = express();
const tasks = require('./routes/api/Task')
const PORT = 5000;
const {connectDB} = require('./db/connect');
require('dotenv').config()
const bodyParser = require('body-parser');
const notFound = require("./middleware/not-found");


app.use(express.static('./public'));

// middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const router1 = express.Router();
// routes
 app.use('/tasks',[router1,tasks]);
 app.use('*',notFound);
 // start the application 
async function start(){
  try{
    await connectDB(process.env.MONGO_ULI);
    app.listen(PORT,console.log('server running in port 5000'));
  }catch(err){
    console.log(err);
  }
}
start();