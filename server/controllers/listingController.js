const addHouse = async (req, res) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;
  const addedHouse = await db.addHouse([
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
  ]);
  if (db) {
    res.status(200).json(addedHouse);
  }
};
const getHouses = async (req, res) => {
  const db = req.app.get("db");
  const retrievedHouses = await db.getHouses();
  if (db) {
    res.status(200).json(retrievedHouses);
  }
};
const deleteHouse = async (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  const deletedHouse = await db.deleteHouse([id]);
  if (db) {
    res.status(200).json(deletedHouse);
  }
};

module.exports = {
  addHouse,
  getHouses,
  deleteHouse
};
