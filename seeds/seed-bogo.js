
const Bogo = require ('../models/Bogo');
const mongoose = require ('mongoose');
  
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

Bogo.collection.drop();

const bogos = [
new Bogo ({ bogo:"Assorted Desserts",price:4.97,quantity:42, filename: 'assorted-desserts.png'}),
new Bogo ({ bogo:"Beef - Tenderloin",price:2.66,quantity:81, filename: 'beef-tenderloin.png'}),
new Bogo ({ bogo:"Scrubbie - Scotchbrite Hand Pad",price:"$3.64",quantity:51, filename: 'scrubbie-scotchbrite-pad.png'}),
new Bogo ({ bogo:"Plastic Wrap",price:"$1.18",quantity:100, filename: 'plastic-wrap.png'}),
new Bogo ({ bogo:"Cheese - Mozzarella",price:0.55,quantity:87, filename: 'cheese-mozarella.png'}),
new Bogo ({ bogo:"Pasta - Lasagna, Frozen",price:2.33,quantity:94, filename: 'pasta-lasagna-frozen.png'}),
new Bogo ({ bogo:"Appetizer - Lobster Phyllo Roll",price:1.76,quantity:68, filename: 'appetizer-lobster-phyllo-roll.png'}),
new Bogo ({ bogo:"Mince Meat - Filling",price:3.31,quantity:69, filename: 'mince-meat-filling.png'}),
new Bogo ({ bogo:"Soup - Amys, Medium Chili",price:2.30,quantity:63, filename: 'soup-amys-chili.png'})
];

let done = 0;
for (i=0; i<bogos.length; i++){
    bogos[i].save(function(err, results){
        done++;
        if (done === bogos.length){
            exit();
        }
    });
}

const exit = function(){
    mongoose.disconnect();
}


