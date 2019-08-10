var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var User = require('../models/user');

var Product = require('../models/product');
var Investor = require('../models/investor');
var Order = require('../models/order');
var reco = "Frogmetrics"
var latest = "Frogmetrics"

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var productChunks = [];
    var locChunks = [];
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var latest = new String(req.session.latest_product ? req.session.latest_product : "Frogmetrics")
  var start = req.session.start ? req.session.start : 0;
  console.log("Init reco is " + reco);
  Product.find({boughtByAO : 0.0}, function(err, docs) {
    console.log(docs);
    console.log("Hitting GET request, logging reco" + reco);
  var latest = (' ' + reco).slice(1)
    var chunkSize = 3;
    start = start % 15;
    console.log("Starting at " + start);
    for (var i = start; i < (start + 3) ;) {
      console.log("Logging bought status AO" + docs[i]._doc.boughtByAO)
      if (latest === docs[i]._doc.symbol) {
        console.log("seen hai");
        continue;
      }
        console.log("Galready " + docs[i]._doc.symbol);
        productChunks.push(docs.slice(i, i + chunkSize));
        if ( productChunks.length == 6)
           break;
      i += chunkSize;
    }
    
  });

   Product.find({loc : "sf"}, function(err, locDocs) {
    console.log("By location " + locDocs);
    var chunkSize = 3;
    for (var i = 0; i < locDocs.length ; i += chunkSize) {
        locChunks.push(locDocs.slice(i, i + chunkSize));
    } 
    console.log("locChunks - " + locChunks);

    });

    res.render('shop/index', {
      title: 'Unicorn Index',
      products: productChunks,
      locs: locChunks,
      latest_product: latest,
      successMsg: successMsg,
      noMessages: !successMsg
    });

  var cart = new Cart(req.session.cart ? req.session.cart : {});
  
  Investor.find({name : 'Alexis Ohanian'}, function(err, docs) {
    console.log("Logging document");
    console.log(docs)
    var productArray = docs[0].portfolio

    for (var i = 0; i < productArray.length; i += 1) {
      console.log("Logging product");
      console.log(productArray[i]);
      Product.findOne({symbol : productArray[i]}, function(err, product) {
        console.log(product);
        if (err) {
          return res.redirect('/');
        }
        console.log("Should we add?" + product.symbol + product.title);
        if (cart.alreadyPresent(product.symbol) == false) {
          console.log("Adding to cart since not already present")
          cart.add(product, product.symbol);
          req.session.cart = cart;
        }
      });
    }
  });

});

router.get('/user1', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var productChunks = [];
    var locChunks = [];
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var latest = new String(req.session.latest_product ? req.session.latest_product : "Frogmetrics")
  console.log("Init reco is " + reco);
  Product.find({boughtByAO : 1.0}, function(err, docs) {
    console.log(docs);
    console.log("Hitting GET request, logging reco" + reco);
  var latest = (' ' + reco).slice(1)
    var chunkSize = 3;
    for (var i = req.session.cart.totalQty - 12; i < req.session.cart.totalQty - 9 ;) {
      console.log("Logging bought status AO" + docs[i]._doc.boughtByAO)
      if (latest === docs[i]._doc.symbol) {
        console.log("seen hai");
        continue;
      }
        console.log("Galready " + docs[i]._doc.symbol);
        productChunks.push(docs.slice(i, i + chunkSize));
        if ( productChunks.length == 6)
           break;
      i += chunkSize;
    }

  });

   Product.find({loc : "ld"}, function(err, locDocs) {
    console.log("By location " + locDocs);
    var chunkSize = 3;
    for (var i = 0; i < locDocs.length ; i += chunkSize) {
        locChunks.push(locDocs.slice(i, i + chunkSize));
    }
    console.log("locChunks - " + locChunks);

    });

    res.render('shop/index', {
      title: 'Unicorn Index',
      products: productChunks,
      locs: locChunks,
      latest_product: latest,
      successMsg: successMsg,
      noMessages: !successMsg
    });
});

router.get('/user2', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var productChunks = [];
    var locChunks = [];
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var latest = new String(req.session.latest_product ? req.session.latest_product : "Frogmetrics")
  var start = req.session.start ? req.session.start : 0;
  console.log("Init reco is " + reco);
  Product.find({boughtByAO : 1.0}, function(err, docs) {
    console.log(docs);
    console.log("Hitting GET request, logging reco" + reco);
  var latest = (' ' + reco).slice(1)
    var chunkSize = 3;
    for (var i = 5; i < 8 ;) {
      console.log("Logging bought status AO" + docs[i]._doc.boughtByAO)
      if (latest === docs[i]._doc.symbol) {
        console.log("seen hai");
        continue;
      }
        console.log("Galready " + docs[i]._doc.symbol);
        productChunks.push(docs.slice(i, i + chunkSize));
        if ( productChunks.length == 6)
           break;
      i += chunkSize;
    }

  });

   Product.find({loc : "tx"}, function(err, locDocs) {
    console.log("By location " + locDocs);
    var chunkSize = 3;
    for (var i = 0; i < locDocs.length ; i += chunkSize) {
        locChunks.push(locDocs.slice(i, i + chunkSize));
    }
    console.log("locChunks - " + locChunks);

    });

    res.render('shop/index', {
      title: 'Unicorn Index',
      products: productChunks,
      locs: locChunks,
      latest_product: latest,
      successMsg: successMsg,
      noMessages: !successMsg
    });
});

router.get('/uni', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var productChunks = [];
    var locChunks = [];
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var latest = new String(req.session.latest_product ? req.session.latest_product : "Frogmetrics")
  var start = req.session.start ? req.session.start : 0;
  console.log("Init reco is " + reco);
  Product.find({boughtByAO : 2.0}, function(err, docs) {
    console.log(docs);
    console.log("Hitting GET request, logging reco" + reco);
  var latest = (' ' + reco).slice(1)
    var chunkSize = 3;
    for (var i = 0; i < 3 ;) {
      console.log("Logging bought status AO" + docs[i]._doc.boughtByAO)
      if (latest === docs[i]._doc.symbol) {
        console.log("seen hai");
        continue;
      }
        console.log("Galready " + docs[i]._doc.symbol);
        productChunks.push(docs.slice(i, i + chunkSize));
        if ( productChunks.length == 6)
           break;
      i += chunkSize;
    }

  });

   Product.find({loc : "tx"}, function(err, locDocs) {
    console.log("By location " + locDocs);
    var chunkSize = 3;
    for (var i = 0; i < locDocs.length ; i += chunkSize) {
        locChunks.push(locDocs.slice(i, i + chunkSize));
    }
    console.log("locChunks - " + locChunks);

    });

    res.render('shop/index', {
      title: 'Unicorn Index',
      products: productChunks,
      locs: locChunks,
      latest_product: latest,
      successMsg: successMsg,
      noMessages: !successMsg
    });
});


router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    reco = product.title;
    req.session.latest_product = product.title;
    console.log("Reco is " + reco);
    req.session.cart = cart;
    req.session.start = (req.session.start + 5) % 20;
    res.redirect('/');
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {
    total: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  var stripe = require("stripe")("sk_test_bgBdBuFAydIEVdepmjpaJKUy");

  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "usd",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
  }, function(err, charge) {
    if (err) {
      req.flash('error', 'We were unable to finalize your purchase!');
      return res.redirect('/checkout');
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id
    });
    order.save(function(err, result) {
      req.flash('success', 'Successful purchase!');
      req.session.cart = null;
      res.redirect('/');
    });
  });
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}
