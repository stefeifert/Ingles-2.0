
const Item = require ('../models/Item');
const mongoose = require ('mongoose');
  
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

Item.collection.drop();

const items= [
new Item ({ item:"Gorgonzola Cheese",price:4.72,quantity:76, filename: 'cheese-gorgonzola.png'}),
new Item ({ item:"Pomegranates",price:4.58,quantity:71, filename: 'pomegranates.png'}),
new Item ({ item:"Claret Cabernet Coppola",price:21.84,quantity:65, filename: 'wine-claret-cabernet-coppola.png'}),
new Item ({ item:"Beef Tenderloin",price:3.66,quantity:81, filename: 'beef-tenderloin.png'}),
new Item ({ item:"Fresh Tarragon",price:2.31,quantity:94, filename: 'tarragon.png'}),
new Item ({ item:"Bagel",price:4.41,quantity:74, filename: 'bagel.png'}),
new Item ({ item:"Orange Juice Concentrate",price:3.14,quantity:43, filename: 'juice-orange-concentrate.png'}),
new Item ({ item:"Chili Sauce",price:2.38,quantity:82, filename: 'sauce-chili.png'}),
new Item ({ item:"Hodo Tofu, Extra Firm",price:3.02,quantity:43, filename: 'tofu-extra-firm-hodo.png'}),
new Item ({ item:"Zinfandel California 2002", price:13.84, quantity:52, filename: 'wine-cal-zinfandel.png'}),
new Item ({ item:"Nando's Garlic Sauce",price:1.72,quantity:68, filename: 'sauce-nandos-peri-peri-garlic.png'}),
new Item ({ item:"Assorted Desserts",price:4.97,quantity:42, filename: 'assorted-desserts.png'}),
new Item ({ item:"Cup Translucent, 9oz",price:1.80,quantity:79, filename: 'cup-translucent.png'}),
new Item ({ item:"Soft Shell Crab",price:10.11,quantity:80, filename: 'soft-shell-crab.png'}),
new Item ({ item:"Tablecloth, 62x114 Red",price:5.61,quantity:100, filename: 'table-cloth.png'}),
new Item ({ item:"Bernaise Sauce, Mix",price:2.53,quantity:82, filename: 'sauce-bernaise-mix.png'}),
new Item ({ item:"Sauvignon Blanc Noble",price:10.74,quantity:86, filename: 'wine-sauvignon-blanc-noble.png'}),
new Item ({ item:"Scotchbrite Hand Pad",price:3.64, quantity:51, filename: 'scrubbie-scotchbrite-pad.png'}),
new Item ({ item:"Black Forest Ham",price:3.98,quantity:62, filename: 'black-forest-ham.png'}),
new Item ({ item:"Plastic Wrap",price:1.18,quantity:100, filename: 'plastic-wrap.png'}),
new Item ({ item:"Mozzarella Cheese",price:1.55,quantity:87, filename: 'cheese-mozarella.png'}),
new Item ({ item:"Soho Lychee Liqueur",price:14.48,quantity:74, filename: 'soho-lychee-liqueur.png'}),
new Item ({ item:"White Wine Vinegar",price:4.93,quantity:54, filename: 'vinegar-white-wine.png'}),
new Item ({ item:"Spaghetti, Dry",price:2.46,quantity:72, filename: 'pasta-spaghetti.png'}),
new Item ({ item:"Chicken Breast, Wing On",price:4.56,quantity:79, filename: 'capon-breast.png'}),
new Item ({ item:"Lasagna, Frozen",price:2.33,quantity:94, filename: 'pasta-lasagna-frozen.png'}),
new Item ({ item:"Mosaic Zweigelt",price:13.64,quantity:57, filename: 'wine-red-mosaic-zweigelt.png'}),
new Item ({ item:"Star Fruit",price:3.31,quantity:82, filename: 'star-fruit.png'}),
new Item ({ item:"Baking Cup Liners",price:3.70,quantity:70, filename: 'liners-baking-cups.png'}),
new Item ({ item:"Lobster Phyllo Roll",price:6.76,quantity:68, filename: 'appetizer-lobster-phyllo-roll.png'}),
new Item ({ item:"Woodwork Pinot Noir",price:16.36,quantity:75, filename: 'wine-pinot-noir-woodwork.png'}),
new Item ({ item:"Mince Meat Filling",price:3.31,quantity:69, filename: 'mince-meat-filling.png'}),
new Item ({ item:"Amy's Soup, Medium Chili",price:2.30,quantity:63, filename: 'soup-amys-chili.png'}),
new Item ({ item:"Beaujolais 750ml",price:8.09,quantity:57, filename: 'wine-beaujolais-georges-deboeuf.png'}),
new Item ({ item:"Bulleit Bourbon",price:34.81,quantity:93, filename: 'bulleit-bourbon.png'}),
new Item ({ item:"Beets",price:1.44,quantity:60, filename: 'beets.png'}),
new Item ({ item:"Tomato Juice, 10 Oz",price:2.63,quantity:49, filename: 'juice-tomato.png'}),
new Item ({ item:"Pork Rib",price:5.30,quantity:68, filename: 'pork-ribs.png'}),
new Item ({ item:"Garbage Bags, Black",price:5.49,quantity:67, filename: 'garbage-bags-black.png'}),
new Item ({ item:"Atlantic Salmon, No Skin",price:5.51,quantity:95, filename: 'atlantic-salmon.png'}),
new Item ({ item:"Campbell's Soup, Mushroom",price:1.82,quantity:51, filename: 'soup-campbells-mushroom.png'}),
new Item ({ item:"Mission Tortillas, 8ct",price:2.64,quantity:94, filename: 'tortillas-mission-super-soft.png'}),
new Item ({ item:"Emma Gnocchi",price:3.74,quantity:55, filename: 'pasta-emma-gnocchi.png'}),
new Item ({ item:"Lamb Shoulder, Boneless",price:5.74,quantity:84, filename: 'lamb-shoulder.png'}),
new Item ({ item:"Vanilla Beans",price:.89,quantity:73, filename: 'vanilla-bean.png'}),
new Item ({ item:"Wadi Fava Beans",price:1.51,quantity:45, filename: 'beans-wadi-fava.png'}),
new Item ({ item:"Black Tea Bags",price:4.64,quantity:90, filename: 'tea-black-bags.png'}),
new Item ({ item:"Dawn Dish Soap",price:2.90,quantity:40, filename: 'dawn-dish-soap.png'}),
new Item ({ item:"Mrs. Buttersworth Syrup",price:2.00,quantity:56, filename: 'syrup-mrs.-buttersworth.png'}),
new Item ({ item:"Brussel Sprouts",price:2.90,quantity:68, filename: 'brussels-sprouts.png'}),
new Item ({ item:"Mussels, Frozen",price:3.26,quantity:69, filename: 'mussels-frozen.png'}),
new Item ({ item:"Kraken Rum",price:22.24,quantity:92, filename: 'kraken-rum.png'}),
new Item ({ item:"Black Tiger Shrimp",price:10.26,quantity:76, filename: 'shrimp.png'}),
new Item ({ item:"Cookie Scoop",price:6.58,quantity:83, filename: 'cookie-scoop.png'}),

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


