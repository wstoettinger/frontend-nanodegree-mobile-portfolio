/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of array using random number sent from generator
var ALL_ADJECTIVES = [
  // dark:
  ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
    "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
    "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"
  ],
  //color:
  ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
    "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
    "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
    "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"
  ],
  //whimsy:
  ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
    "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
    "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
    "brainwashed"
  ],
  //shiny:
  ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
    "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
    "metallic"
  ],
  //noisy:
  ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
    "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
    "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
    "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"
  ],
  //apocalyptic:
  ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
    "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
    "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"
  ],
  //insulting:
  ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
    "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
    "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
    "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
    "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
    "horrible", "syncophantic", "unhelpful", "bootlicking"
  ],
  //praise:
  ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
    "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
    "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
    "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
    "majestic", "grand", "stunning"
  ],
  //scientific:
  ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
    "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
    "extinct", "galactic"
  ]
];

// const array for all nouns instead of a switch function.
var ALL_NOUNS = [
  //animals: 
  ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
    "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
    "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
    "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
    "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
    "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
    "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"
  ],
  //professions: 
  ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
    "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
    "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
    "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"
  ],
  //fantasy:
  ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
    "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
    "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"
  ],
  //music: 
  ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
    "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
    "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
    "singer"
  ],
  //horror: 
  ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
    "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
    "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
    "fiend", "satanist", "moon", "fullMoon"
  ],
  //gross: 
  ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
    "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
    "fluid", "moisture", "garbage", "trash", "bug"
  ],
  //everyday: 
  ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
    "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
    "garden", "school", "wallet", "bottle"
  ],
  //jewelry: 
  ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
    "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
    "costume", "ornament", "treasure"
  ],
  //places: 
  ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
    "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
    "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"
  ],
  //scifi: 
  ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
    "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
    "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
    "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"
  ]
];

var ADJECTIVE_GROUPS = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"]; // types of adjectives for pizza titles
var NOUN_GROUPS = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"]; // types of nouns for pizza titles

// Chooses random adjective and random noun
function randomName() {
  var random = Math.random(); // use the same random number for ajd and noun for performance reasons

  var adjGroup = Math.floor(random * ADJECTIVE_GROUPS.length); // Math.floor is faster than parseInt()
  var adjs = ALL_ADJECTIVES[adjGroup];
  var randomAdj = adjs[Math.floor(random * adjs.length)].capitalize();

  var nounGroup = Math.floor(random * NOUN_GROUPS.length); // Math.floor is faster than parseInt()
  var nouns = ALL_NOUNS[nounGroup];
  var randomNoun = nouns[Math.floor(random * nouns.length)].capitalize();

  return "The " + randomAdj + " " + randomNoun;
}

// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function () {

  // generate four random numbers per pizza and use it for all ingredients
  var randoms = [Math.random(), Math.random(), Math.random(), Math.random()];

  var numberOfMeats = Math.floor(randoms[0] * 4);
  var numberOfNonMeats = Math.floor(randoms[1] * 3);
  var numberOfCheeses = Math.floor(randoms[2] * 2);

  var ingredients = [];

  for (var i = 0; i < numberOfMeats; i++) {
    ingredients.push(pizzaIngredients.meats[Math.floor(randoms[i] * pizzaIngredients.meats.length)]);
  }

  for (var j = 0; j < numberOfNonMeats; j++) {
    ingredients.push(pizzaIngredients.nonMeats[Math.floor(randoms[j] * pizzaIngredients.meats.length)]);
  }

  for (var k = 0; k < numberOfCheeses; k++) {
    ingredients.push(pizzaIngredients.cheeses[Math.floor(randoms[k] * pizzaIngredients.meats.length)]);
  }

  ingredients.push(pizzaIngredients.sauces[Math.floor(randoms[0] * pizzaIngredients.meats.length)]);
  ingredients.push(pizzaIngredients.crusts[Math.floor(randoms[1] * pizzaIngredients.meats.length)]);

  var pizza = "";
  for (var n = 0; n < ingredients.length; n++) {
    pizza += "<li>" + ingredients[n] + "</li>";
  }

  return pizza;
};

// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function (size) {
  window.performance.mark("mark_start_resize"); // User Timing API function

  // Changes the value for the size of the pizza above the slider
  function changeSliderLabel(size) {
    switch (size) {
    case "1":
      document.querySelector("#pizzaSize").innerHTML = "Small";
      return;
    case "2":
      document.querySelector("#pizzaSize").innerHTML = "Medium";
      return;
    case "3":
      document.querySelector("#pizzaSize").innerHTML = "Large";
      return;
    default:
      console.log("bug in changeSliderLabel");
    }
  }

  changeSliderLabel(size);

  // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSizes(size).
  function determineDx(elem, size) {
    var oldwidth = elem.offsetWidth;
    var windowwidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldsize = oldwidth / windowwidth;

    // TODO: change to 3 sizes? no more xl?
    // Changes the slider value to a percent width
    function sizeSwitcher(size) {
      switch (size) {
      case "1":
        return 0.25;
      case "2":
        return 0.3333;
      case "3":
        return 0.5;
      default:
        console.log("bug in sizeSwitcher");
      }
    }

    var newsize = sizeSwitcher(size);
    var dx = (newsize - oldsize) * windowwidth;

    return dx;
  }

  // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSizes(size).
  function getSize(size) {
    switch (size) {
    case "1":
      return 50;
    case "2":
      return 100;
    case "3":
      return 150;
    default:
      return 100;
    }
  }

  // Iterates through pizza elements on the page and changes their widths
  function changePizzaSizes(size) {

    sizeStyle.innerHTML = ".mover { width: " + getSize(size) + "px;}";
    /*
        for (var i = 0; i < document.getElementsByClassName("randomPizzaContainer").length; i++) {
          var dx = determineDx(document.getElementsByClassName("randomPizzaContainer")[i], size);
          var newwidth = (document.getElementsByClassName("randomPizzaContainer")[i].offsetWidth + dx) + 'px';
          document.getElementsByClassName("randomPizzaContainer")[i].style.width = newwidth;
        }*/
  }
  changePizzaSizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");
};

var HTMLpizzaElement = '<div is="my-pizza" id="pizza%nr%" class="pizza"><p class="name">%name%</p><ul class="ingredients">%ingreds%</ul></div>';

function generateRandomPizzas() {
  window.performance.mark("mark_start_generating"); // collect timing data

  var HTML = "";
  // This for-loop actually creates and appends all of the pizzas when the page loads
  for (var i = 2; i < 100; i++) {
    // its faster to build the string first
    HTML += HTMLpizzaElement.replace("%nr%", i).replace("%name%", randomName()).replace("%ingreds%", makeRandomPizza());
  }
  // and then append it as a whole to the DOM
  $("#randomPizzas").append(HTML);

  // User Timing API again. These measurements tell you how long it took to generate the initial pizzas
  window.performance.mark("mark_end_generating");
  window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
  var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
  console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");
}

setTimeout(generateRandomPizzas, 0); // generate pizzas asynchronously

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) { // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {

  // removing the performance tracking pushes the speed still a little bit more: 
  frame++;
  window.performance.mark("mark_start_frame");

  // using the same 'phase' for each pizza speeds up the renderind quite a bit but then they all move synchronized
  //var phase = Math.floor(Math.sin((document.body.scrollTop / 1250)) * 100);

  for (var i = 0; i < movers.length; i++) {
    // using a different 'phase' for each pizza takes longer but they don't move synchronized 
    // this gives a way smoother animation for the pizzas:
    // adding math.floor to prevent sub-pixel rendering
    var phase = Math.floor(Math.sin((document.body.scrollTop / 1250) + i) * 50);
    movers[i].style.transform = "translateX(" + phase + "px)";
  }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

// runs updatePositions on scroll
window.addEventListener('scroll', updatePositions);

var movers = [];

var sizeStyle;

// Generates the pizzas when the page loads.
document.addEventListener('DOMContentLoaded', function () {

  sizeStyle = document.createElement("style");
  sizeStyle.type = "text/css";
  document.body.appendChild(sizeStyle);

  var pizzaCols = 4; // less pizzas means less work
  var pizzaRows = 4;

  var colWidth = window.innerWidth / pizzaCols;
  var rowHeight = window.innerHeight / pizzaRows;

  var randomX = Math.floor(Math.random() * 10 + 1);

  var HTMLimage = '<img class="mover" src="images/pizza.png" srcset="images/pizza.webp" style="top:%top%; left:%left%;">';
  var HTML = "";
  for (var i = 0; i < pizzaRows; i++) {
    for (var j = 0; j < pizzaCols; j++) {
      // calculate an additional random deltaX for each pizza, so they start from a different position
      var deltaX = Math.floor(Math.sin((i + j) * randomX)) * 100;

      // i prefer using a string to create the html element, this is much more convenient to use
      HTML += HTMLimage.replace("%top%", i * rowHeight + 'px').replace("%left%", j * colWidth + colWidth / 2 + deltaX + 'px');
      //var elem = $("#movingPizzas1").append(HTML).children().last();
    }
  }
  $("#movingPizzas1").append(HTML);

  movers = document.getElementsByClassName("mover");
  //updatePositions();
});