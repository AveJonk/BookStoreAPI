const router = require("express").Router();
const { findAllBooks, detailBooks, tambahBuku, bunuhBuku, updateBuku} = require("../controllers/BookControllers");
const { CariSemuaBuku, detailBuku, BakarBuku, KoreksiBuku, tambahkanBukuBaru} = require("../controllers/UserController");
//endpoint book
router.get("/books", findAllBooks);
router.get("/findbooks", detailBooks);
router.post("/book", tambahBuku);
router.delete("/book", bunuhBuku);
router.put("/update_book", updateBuku);

//endpont user
router.get("/users", CariSemuaBuku);
router.get("/users/:id", detailBuku);
router.post("/users", tambahkanBukuBaru);
router.delete("/users/:id", BakarBuku);
router.put("/users", KoreksiBuku);

module.exports = router;
