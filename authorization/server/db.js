const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'AuthDB';

const dbConnection = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })
    return client.db(dbName);
  }
  catch (e) {
    console.log(e)
  }

}

module.exports = dbConnection();