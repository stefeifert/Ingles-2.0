
const Bogo = require ('../models/Bogo');
const mongoose = require ('mongoose');
  
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

Bogo.collection.drop();

const bogos = [
new Bogo ({ bogo:"Atlantic Salmon, No Skin",price:5.51,quantity:95, filename: 'atlantic-salmon.png'}),
new Bogo ({ bogo:"Beef Tenderloin",price:2.66,quantity:81, filename: 'beef-tenderloin.png'}),
new Bogo ({ bogo:"Scotchbrite Hand Pad",price:"$3.64",quantity:51, filename: 'scrubbie-scotchbrite-pad.png'}),
new Bogo ({ bogo:"Plastic Wrap",price:"$1.18",quantity:100, filename: 'plastic-wrap.png'}),
new Bogo ({ bogo:"Mozzarella Cheese",price:0.55,quantity:87, filename: 'cheese-mozarella.png'}),
new Bogo ({ bogo:"Lasagna, Frozen",price:2.33,quantity:94, filename: 'pasta-lasagna-frozen.png'}),
new Bogo ({ bogo:"Woodwork Pinot Noir",price:16.36,quantity:75, filename: 'wine-pinot-noir-woodwork.png'}),
new Bogo ({ bogo:"Emma Gnocchi",price:3.74,quantity:55, filename: 'pasta-emma-gnocchi.png'}),
new Bogo ({ bogo:"Amy's Soup, Medium Chili",price:2.30,quantity:63, filename: 'soup-amys-chili.png'})
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


