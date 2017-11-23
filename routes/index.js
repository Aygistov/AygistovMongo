var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://aygistov:Ayg@ds149535.mlab.com:49535/aygistovapp', {
    useMongoClient: true,
    /* other options */
});
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Items = mongoose.model('items', schema);
var myItems = "123";
var err;

Items.findOne({ 'name': 'qwerty' }, 'name size', function (err, myItem) {
    myItems = myItem.size;
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: myItems });
});

module.exports = router;

