const express = require("express");
const router = express.Router();
const {  all , store, remove, singleTask, put } = require("../../controllers/tasks");

router.route('/').get(all).post(store);
router.route('/:id').get(singleTask).put(put).delete(remove);
module.exports = router;