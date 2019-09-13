const addHouse = async (req, res) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;
};
const getHouses = async (req, res) => {
  const db = req.app.get("db");
  const houses = await db.getHouses();
  if (db) {
    res.status(200).json(houses);
  }
};
const deleteHouse = async (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  const houses = await db.deleteHouse([id]);
  if (db) {
    res.status(200).json(houses);
  }
};

module.exports = {
  addHouse,
  getHouses,
  deleteHouse
};
