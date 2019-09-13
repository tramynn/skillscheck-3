require("dotenv").config();
const express = require("express");
const massive = require("massive");
const listingCtrl = require("./controllers/listingController");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database is connected :D");
  })
  .catch(err => console.log(err));

app.use(express.json());

// retrieve houses
app.get("/api/listing", listingCtrl.getHouses);
// add inventory
app.post("/api/listing", listingCtrl.addHouse);
// delete house
app.delete("/api/listing/:id", listingCtrl.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
