const express = require('express');

const router = express.Router();

/* GET Terms page. */
router.get('/', (req, res, next) => {
  res.render('termsAndConditions', { title: 'Terms and Conditions' ,user: req.user || {}});
});

module.exports = router;