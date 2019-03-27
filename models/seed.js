/**
 * Seed the item collection
 */
function seedItems(req, res) {
  // create some events
  const items = [
    { item: 'Lotion', price: 5.20, quantity:100},
    { item: 'Eggs', price: 1.25, quantity:150},
    { item: 'Apples', price: 2.20, quantity:250},
    { item: 'Orange Juice', price: 5.00, quantity:500}
  ];

  // use the Event model to insert/save
  for (item of items) {
    var newItem = new Item(item);
    newItem.save();
  }

  // seeded!
  res.send('Database seeded with items!');
}


// var Item = require('../models/item');

// exports.run = function(res, req) {
//     Item.create({name: 'Broad beans'},
//                 {name: 'Tomatoes'},
//                 {name: 'Peppers'}, function(err, items) {
//         if (err) {
//             req(err);
//             return;
//         }
//         res(items);
//     });
// };

// if (require.main === module) {
//     require('./connect');
//     exports.run(function() {
//         var mongoose = require('mongoose');
//         mongoose.disconnect();
//     }, function(err) {
//         console.error(err);
//     });
// }