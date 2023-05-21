const { MongoClient } = require("mongodb");

async function createConnection(URL) {
    let client = await new MongoClient(URL);
    return client;
}

const getClient = async (URL) => {
  var client;
  if(!client){
    client = await createConnection(URL);
    return client;
  }
  return client;
};
module.exports = {getClient};