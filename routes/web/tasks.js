const express = require("express");
const router = express.Router();
const { index, create, edit, store, remove } = require("../../controllers/tasks");

router.get('/',index);
router.post('/',store);
router.delete('/',remove);
/*****/
router.route("/create").get(create);
router.post('/edit',edit);


module.exports = router;
