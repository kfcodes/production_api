const express = require("express");
const router = express.Router();
const products = require("../controllers/old_product.controller.js");
const upload = require("../controllers/fileUpload/multerPdf.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
const Documentation = require("../controllers/production/productionDocumentation.controllers");
const Ps = require("../controllers/production/productionSchedule.controllers");

// PRODUCT DB ROUTES
// Retrieve all product
router.get("/products", ProductDB.findAll);
// Retrieve all products
router.get("/finished_products", ProductDB.findFinishedProducts);
// Retrieve a single product with productId
router.get("/products/:productId", ProductDB.findOne);


// PRODUCTION DOCUMENTATION ROUTES
// Retrieve all brands
router.get("/brands", Documentation.findAllBrands);
// Retrieve all products from specific brand
router.get("/brandproducts/:id", Documentation.productsByBrand);
// Retrieve a single product with productId
router.get("/components/:id", Documentation.productComponents);

// Get current Production
router.get("/mps", Ps.findCurrentProduction);
// Get All Production
router.get("/full_mps", Ps.findAllProduction);

// Retrieve a single product with productId
router.get("/pallet/:palletid", products.findPallet);
// Get All pallets
router.get("/pallets", products.findRecentPallets);
// Get All pallets
router.get("/all_pallets", products.findAllPallets);
// Get All pallets
router.get("/pallet_data", products.findPalletData);
router.get("/check_sheet", products.printCheckSheet);
// Get All pallets
router.get("/pallet_items", products.findAllPalletItems);
// Get All pallets
router.get("/pallet_items/:palletid", products.findPalletItemsForPallet);
// Retrieve a single product with productId
router.get("/pallets/:brand_prefix", products.findAllPalletsfromBrand);
// Print the label for a single pallet
router.get("/label/:palletid", products.printPalletLabel);
// Get single EOL data
router.get("/eol/:eolid", products.findFinishedProduct);
// Get All pallets
router.get("/latest_pallet_data", products.latestPalletData);

// Create a new pallet
router.post("/pallet", products.createPallet);
// Create a new pallet item
router.post("/pallet_item/:palletid", products.createPalletItem);
// Print the label for a single pallet
router.post("/box_label/:eolid", products.printBoxLabel);
// Create EOL data
router.post("/eol", products.createFinishedProduct);
// Dump Sql Pallet data
router.post("/dump/:palletId", products.dumpSqlData);
// Create a new pallet
router.post("/po", products.createPo);
router.post("/upload_pdf", upload.array("files", 10), products.uploadPdf);
router.post("/upload_data", upload.array("files", 10), products.uploadData);
router.post("/print_pdf/:pdfname", products.printPdf);
router.post("/print_blank_labels", products.printBlankLabels);

// update a pallet item with the id of that pallet item
router.put("/pallet_item/:itemid", products.updatePalletItem);
// Update a pallet with pallet id
router.put("/pallet/:palletid", products.update);
// Update FinishedProduct by ID
router.put("/eol/:eolid", products.updateFinishedProduct);

// Delete a brand with brandId
router.delete("/pallet_item/:itemid", products.deletePalletItem);

module.exports = router;
