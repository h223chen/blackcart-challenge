const express = require("express");
const BlackCart = require("../src/Integrations/BlackCart");
const DBService = require("../src/services/DBService");
const router = express.Router();

let db = new DBService();
let stores = db.getStores();
const routes = {
  products: "/stores/:storeId/products",
};

let blackcart = new BlackCart();

router.get(routes.products, (req, res) => {
  let storeId = req.params.storeId;

  if (storeId && stores[storeId]) {
    let products = blackcart.getProducts(storeId);
    res.send(products);
  } else {
    res.status(404).send("undefined storeId " + storeId);
  }
});

router.all("*", (req, res) => {
  res.status(404).send("Undefined route");
});

module.exports = router;
