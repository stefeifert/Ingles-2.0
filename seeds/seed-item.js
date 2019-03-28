
const Item = require ('../models/Item');
const mongoose = require ('mongoose');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  
const items= [

new Item ({item:"Wine - Zinfandel California 2002", price:3.84, quantity:52}), 
new Item ({item:"Assorted Desserts",price:4.97,quantity:42}),
new Item ({item:"Cup Translucent 9 Oz",price:1.80,quantity:79}),
new Item ({item:"Crab - Soft Shell",price:10.11,quantity:80}),
new Item ({item:"Table Cloth 62x114 Colour",price:2.61,quantity:100}),
new Item ({item:"Ham - Black Forest",price:3.98,quantity:62}),
new Item ({item:"Sauce - Chili",price:2.38,quantity:82}),
new Item ({item:"Sauce - Bernaise, Mix",price:2.53,quantity:82}),
new Item ({item:"Pomegranates",price:4.58,quantity:71})

// to add to the array, must use: "new Item ()," like above

// {item:"Wine - Sauvignon Blanc Noble",price:0.74,quantity:86},
// {item:"Beef - Tenderloin",price:2.66,quantity:81},
// {item:"Scrubbie - Scotchbrite Hand Pad",price:"$3.64",quantity:51},
// {item:"Plastic Wrap",price:"$1.18",quantity:100},
// {item:"Cheese - Mozzarella",price:0.55,quantity:87},
// {item:"Soho Lychee Liqueur",price:4.48,quantity:74},
// {item:"Vinegar - White Wine",price:4.93,quantity:54},
// {item:"Pasta - Spaghetti, Dry",price:3.46,quantity:72},
// {item:"Capon - Breast, Wing On",price:4.56,quantity:79},
// {item:"Pasta - Lasagna, Frozen",price:2.33,quantity:94},
// {item:"Wine - Red, Mosaic Zweigelt",price:3.64,quantity:57},
// {item:"Star Fruit",price:0.31,quantity:82},
// {item:"Liners - Baking Cups",price:3.70,quantity:70},
// {item:"Appetizer - Lobster Phyllo Roll",price:1.76,quantity:68},
// {item:"Wine - Pinot Noir Woodwork",price:12.36,quantity:75},
// {item:"Mince Meat - Filling",price:3.31,quantity:69},
// {item:"Soup - Amys, Medium Chili",price:2.30,quantity:63},
// {item:"Wine - Beaujolais Georges Duboeuf",price:"$8.09",quantity:57},
// {item:"Bulleit Bourbon",price:34.81,quantity:93},
// {item:"Beets",price:4.44,quantity:60},
// {item:"Juice - Tomato, 10 Oz",price:0.63,quantity:49},
// {item:"Juice - Orange, Concentrate",price:3.14,quantity:43},
// {item:"Tarragon - Fresh",price:2.31,quantity:94},
// {item:"Cheese - Gorgonzola",price:4.72,quantity:76},
// {item:"Bagel",price:4.41,quantity:74},
// {item:"Pork - Rib",price:5.30,quantity:68},
// {item:"Garbage Bags - Black",price:1.49,quantity:67},
// {item:"Wine - Claret Cabernet Coppola",price:21.84,quantity:65},
// {item:"Salmon - Atlantic, No Skin",price:0.51,quantity:95},
// {item:"Soup - Campbells Mushroom",price:3.82,quantity:51},
// {item:"Tortillas - Mission Super Soft",price:2.64,quantity:94},
// {item:"Pasta - Emma Gnocchi",price:4.74,quantity:55},
// {item:"Lamb - Shoulder, Boneless",price:0.74,quantity:84},
// {item:"Vanilla Beans",price:0.19,quantity:73},
// {item:"Beans - Wadi Fava",price:1.51,quantity:45},
// {item:"Tea - Black Bags",price:4.64,quantity:90},
// {item:"Dawn Dish Soap",price:2.90,quantity:40},
// {item:"Syrup - Mrs. Buttersworth",price:2.00,quantity:56},
// {item:"Brussels Sprouts",price:2.90,quantity:68},
// {item:"Mussels - Frozen",price:3.26,quantity:69},
// {item:"Grenadillo",price:3.43,quantity:88},
// {item:"Kraken Rum",price:2.24,quantity:92},
// {item:"Shrimp - Black Tiger 13/15",price:10.26,quantity:76},
// {item:"Tofu - Extra Firm Hodo",price:1.02,quantity:43},
// {item:"Cookie Scoop",price:2.58,quantity:83},
// {item:"Sauce - Nandos, Peri Peri Garlic",price:1.72,quantity:68}

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

