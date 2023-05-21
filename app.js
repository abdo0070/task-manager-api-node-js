const express = require("express");
const { htmlPage } = require('./service/htmlPage');
const { connect } = require('./db/connect');
const { Task } = require("./model/Task");
const app = express();
const tasks = require('./routes/web/tasks');
const PORT = 5000;
const {connectDB} = require('./db/connect');
require('dotenv').config()

app.use(express.static('./public'));

// middleware
app.use(express.json())

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