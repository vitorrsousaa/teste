const { Router } = require("express");

const router = Router();

router.get("/about", Controller.index);

module.exports = router;
