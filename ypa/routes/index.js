var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.status(500).send('خطأ في الخادم');
});


// تصدير التوجيه
module.exports = router;
