require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database is connected :D");
  })
  .catch(err => console.log(err));

app.use(express.json());

// add inventory
app.post("/api/listing");
// retrieve all products
app.get("/api/listing");
// edit product
app.put("/api/listing/:id");
// delete product
app.delete("/api/listing:id");

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
