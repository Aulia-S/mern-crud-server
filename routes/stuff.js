const express = require("express");
const router = express.Router();
const stuffController = require("../controllers/stuff");

router.post("/", stuffController.create);
router.get("/", stuffController.readAll);
router.delete("/:stuffId", stuffController.delete);
// update
router.get("/:stuffId", stuffController.readOne);
router.put("/:stuffId", stuffController.update);

module.exports = router;
