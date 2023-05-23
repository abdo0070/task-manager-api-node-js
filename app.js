const express = require("express");
const app = express();
const tasks = require('./routes/api/Task')
const PORT = 5000;
const {connectDB} = require('./db/connect');
require('dotenv').config()
const bodyParser = require('body-parser');


app.use(express.static('./public'));

// middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const router1 = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router1.use('*',(req, res, next) => {
  console.log('Time:', Date.now());
  next();
})


// routes
 app.use('/tasks',[router1,tasks]);
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