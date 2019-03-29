
const Item = require ('../models/Item');
const mongoose = require ('mongoose');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  
const items= [

new Item ({item:"Wine - Zinfandel California 2002", price:3.84, quantity:52, filename: 'wine-cal-zinfandel.png'}), 
new Item ({item:"Assorted Desserts",price:4.97,quantity:42, filename: 'assorted-desserts.png'}),
new Item ({item:"Cup Translucent 9 Oz",price:1.80,quantity:79, filename: 'cup-translucent.png'}),
new Item ({item:"Crab - Soft Shell",price:10.11,quantity:80, filename: 'soft-shell-crab.png'}),
new Item ({item:"Table Cloth 62x114 Colour",price:2.61,quantity:100, filename: 'table-cloth.png'}),
new Item ({item:"Ham - Black Forest",price:3.98,quantity:62, filename: 'black-forest-ham.png'}),
new Item ({item:"Sauce - Chili",price:2.38,quantity:82, filename: 'sauce-chili'}),
new Item ({item:"Sauce - Bernaise, Mix",price:2.53,quantity:82, filename: 'sauce-bernaise-mix.png'}),
new Item ({item:"Pomegranates",price:4.58,quantity:71, filename: 'pomegranates.png'})

// to add to the array, must use: "new Item ()," like above

// {item:"Wine - Sauvignon Blanc Noble",price:0.74,quantity:86, filename: 'wine-sauvignon-blanc-noble.png'},
// {item:"Beef - Tenderloin",price:2.66,quantity:81, filename: 'beef-tenderloin.png'},
// {item:"Scrubbie - Scotchbrite Hand Pad",price:"$3.64",quantity:51, filename: 'scrubbie-scotchbrite-pad.png'},
// {item:"Plastic Wrap",price:"$1.18",quantity:100, filename: 'plastic-wrap.png'},
// {item:"Cheese - Mozzarella",price:0.55,quantity:87, filename: 'cheese-mozarella.png'},
// {item:"Soho Lychee Liqueur",price:4.48,quantity:74, filename: 'soho-lychee-liqueur'},
// {item:"Vinegar - White Wine",price:4.93,quantity:54, filename: 'vinegar-white-wine.png'},
// {item:"Pasta - Spaghetti, Dry",price:3.46,quantity:72, filename: 'pasta-spaghetti.png'},
// {item:"Capon - Breast, Wing On",price:4.56,quantity:79, filename: 'capon-breast.png'},
// {item:"Pasta - Lasagna, Frozen",price:2.33,quantity:94, filename: 'pasta-lasagna-frozen.png'},
// {item:"Wine - Red, Mosaic Zweigelt",price:3.64,quantity:57, filename: 'wine-red-mosaic-zweigelt.png'},
// {item:"Star Fruit",price:0.31,quantity:82, filename: 'star-fruit.png'},
// {item:"Liners - Baking Cups",price:3.70,quantity:70, filename: 'liners-baking-cups.png'},
// {item:"Appetizer - Lobster Phyllo Roll",price:1.76,quantity:68, filename: 'appetizer-lobster-phyllo-roll.png'},
// {item:"Wine - Pinot Noir Woodwork",price:12.36,quantity:75, filename: 'wine-pinot-noir-woodwork.png'},
// {item:"Mince Meat - Filling",price:3.31,quantity:69, filename: 'mince-meat-filling.png'},
// {item:"Soup - Amys, Medium Chili",price:2.30,quantity:63, filename: 'soup-amys-chili.png'},
// {item:"Wine - Beaujolais Georges Duboeuf",price:"$8.09",quantity:57, filename: 'wine-beaujolais-georges-deboeuf.png'},
// {item:"Bulleit Bourbon",price:34.81,quantity:93, filename: 'bulleit-bourbon.png'},
// {item:"Beets",price:4.44,quantity:60, filename: 'beets.png'},
// {item:"Juice - Tomato, 10 Oz",price:0.63,quantity:49, filename: 'juice-tomato.png'},
// {item:"Juice - Orange, Concentrate",price:3.14,quantity:43, filename: 'juice-orange-concentrate.png'},
// {item:"Tarragon - Fresh",price:2.31,quantity:94, filename: 'tarragon.png'},
// {item:"Cheese - Gorgonzola",price:4.72,quantity:76, filename: 'cheese-gorgonzola.png'},
// {item:"Bagel",price:4.41,quantity:74, filename: 'bagel.png'},
// {item:"Pork - Rib",price:5.30,quantity:68, filename: 'pork-ribs.png'},
// {item:"Garbage Bags - Black",price:1.49,quantity:67, filename: 'garbage-bags-black.png'},
// {item:"Wine - Claret Cabernet Coppola",price:21.84,quantity:65, filename: 'wine-claret-cabernet-coppola.png'},
// {item:"Salmon - Atlantic, No Skin",price:0.51,quantity:95, filename: 'atlantic-salmon.png'},
// {item:"Soup - Campbells Mushroom",price:3.82,quantity:51, filename: 'soup-campbells-mushroom.png'},
// {item:"Tortillas - Mission Super Soft",price:2.64,quantity:94, filename: 'tortillas-mission-super-soft.png'},
// {item:"Pasta - Emma Gnocchi",price:4.74,quantity:55, filename: 'pasta-emma-gnocchi.png'},
// {item:"Lamb - Shoulder, Boneless",price:0.74,quantity:84, filename: 'lamb-shoulder.png'},
// {item:"Vanilla Beans",price:0.19,quantity:73, filename: 'vanilla-bean.png'},
// {item:"Beans - Wadi Fava",price:1.51,quantity:45, filename: 'beans-wadi-fava.png'},
// {item:"Tea - Black Bags",price:4.64,quantity:90, filename: 'tea-black-bags.png'},
// {item:"Dawn Dish Soap",price:2.90,quantity:40, filename: 'dawn-dish-soap.png'},
// {item:"Syrup - Mrs. Buttersworth",price:2.00,quantity:56, filename: 'syrup-mrs.-buttersworth.png'},
// {item:"Brussels Sprouts",price:2.90,quantity:68, filename: 'brussels-sprouts.png'},
// {item:"Mussels - Frozen",price:3.26,quantity:69, filename: 'mussels-frozen.png'},
// {item:"Kraken Rum",price:2.24,quantity:92, filename: 'kraken-rum.png'},
// {item:"Shrimp - Black Tiger 13/15",price:10.26,quantity:76, filename: 'shrimp.png'},
// {item:"Tofu - Extra Firm Hodo",price:1.02,quantity:43, filename: 'tofu-extra-firm-hodo.png'},
// {item:"Cookie Scoop",price:2.58,quantity:83, filename: 'cookie-scoop.png'},
// {item:"Sauce - Nandos, Peri Peri Garlic",price:1.72,quantity:68, filename: 'sauce-nandos-peri-peri-garlic.png'}

];

let done = 0;
for (i=0; i<items.length; i++){
    items[i].save(function(err, results){
        done++;
        if (done === items.length){
            exit();
        }
    });
}

const exit = function(){
    mongoose.disconnect();
}


