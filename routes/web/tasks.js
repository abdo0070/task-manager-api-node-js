const express = require("express");
const router = express.Router();
const { index, create, edit, store } = require("../../controllers/tasks");

router.get('/',index);
router.route("/create").get(create);
router.post('/edit',edit);
router.post('/store',store);

module.exports = router;
