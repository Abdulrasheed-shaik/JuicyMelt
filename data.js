const products = [
    // Fruits
    {
      id: 1,
      type: "fruit",
      name: "Apple",
      category: "Fresh Fruits",
      price: { perKg: 150 },
      image: "./assets/apple.png",
      description: "Fresh and juicy apples, rich in nutrients.",
      available:"true"
    },
    {
      id: 2,
      type: "fruit",
      name: "Banana",
      category: "Fresh Fruits",
      price: { perDozen: 60 },
      image: "./assets/banana.png",
      description: "Sweet and ripe bananas, perfect for energy.",
      available:"true"
    },
    {
      id: 3,
      type: "fruit",
      name: "Mango",
      category: "Tropical Fruits",
      price: { perKg: 200 },
      image: "./assets/mango.png",
      description: "Delicious tropical mangoes, bursting with flavor.",
      available:"false"
    },
    {
      id: 4,
      type: "fruit",
      name: "Pineapple",
      category: "Tropical Fruits",
      price: { perKg: 90 },
      image: "./assets/pineapple.png",
      description: "Sweet and tangy pineapples, great for desserts.",
      available:"true"
    },
    {
      id: 5,
      type: "fruit",
      name: "Strawberry",
      category: "Berries",
      price: { perKg: 350 },
      image: "./assets/strawberry.png",
      description: "Fresh strawberries packed with flavor.",
      available:"true"
    },
    {
      id: 6,
      type: "fruit",
      name: "Grapes",
      category: "Fresh Fruits",
      price: { perKg: 120 },
      image: "./assets/grapes.png",
      description: "Juicy seedless grapes, perfect for snacks.",
      available:"true"
    },
    {
      id: 7,
      type: "fruit",
      name: "Custard Apple",
      category: "Tropical Fruits",
      price: { perKg: 250 },
      image: "./assets/custardapple.png",
      description: "Sweet and creamy tropical fruit with a unique flavor.",
      available:"true"
    },
    {
      id: 8,
      type: "fruit",
      name: "Papaya",
      category: "Tropical Fruits",
      price: { perKg: 90 },
      image: "./assets/papaya.png",
      description: "Rich in enzymes, papaya is great for digestion and health.",
      available:"true"
    },
    {
      id: 9,
      type: "fruit",
      name: "Indian Gooseberry (Amla)",
      category: "Superfruits",
      price: { perKg: 180 },
      image: "./assets/amla.png",
      description: "A nutrient powerhouse, loaded with Vitamin C and antioxidants.",
      available:"true"
    },
    {
      id: 10,
      type: "fruit",
      name: "Jackfruit",
      category: "Tropical Fruits",
      price: { perPiece: 10 },
      image: "./assets/jackfruit.png",
      description: "The largest tree-borne fruit, known for its unique texture and taste.",
      available:"false"
    },
    {
      id: 11,
      type: "fruit",
      name: "Pomegranate",
      category: "Fresh Fruits",
      price: { perKg: 220 },
      image: "./assets/pomogranate.png",
      description: "Juicy and vibrant seeds, rich in antioxidants.",
      available:"true"
    },
    {
      id: 12,
      type: "fruit",
      name: "Guava",
      category: "Tropical Fruits",
      price: { perKg: 100 },
      image: "./assets/guava.png",
      description: "A fragrant fruit with a blend of sweetness and tartness.",
      available:"true"
    },
    {
      id: 13,
      type: "fruit",
      name: "Sapota (Chikoo)",
      category: "Tropical Fruits",
      price: { perKg: 140 },
      image: "./assets/sapota.png",
      description: "Sweet and malty fruit, a favorite for natural desserts.",
      available:"true"
    },
    {
      id: 14,
      type: "fruit",
      name: "Jamun (Black Plum)",
      category: "Tropical Fruits",
      price: { perKg: 250 },
      image: "./assets/jamun.png",
      description: "A nutritious tropical fruit with a tangy-sweet flavor, known for its health benefits.",
      available:"false"
    },    
    // Juices
    {
      id: 15,
      type: "juice",
      name: "Orange Juice",
      category: "Fresh Juices",
      price: { perLiter: 120 },
      image: "./assets/orangejuice.png",
      description: "Freshly squeezed orange juice, no added sugar.",
      available:"true"
    },
    {
      id: 16,
      type: "juice",
      name: "Apple Juice",
      category: "Fresh Juices",
      price: { perLiter: 140 },
      image: "./assets/applejuice.png",
      description: "100% pure apple juice with a refreshing taste.",
      available:"true"
    },
    {
      id: 17,
      type: "juice",
      name: "Mixed Berry Juice",
      category: "Smoothies",
      price: { perLiter: 180 },
      image: "./assets/mixedberry.png",
      description: "A blend of strawberries, blueberries, and raspberries.",
      available:"true"
    },
    {
      id: 18,
      type: "juice",
      name: "Pineapple Juice",
      category: "Fresh Juices",
      price: { perLiter: 130 },
      image: "./assets/pineapplejuice.png",
      description: "Tangy and sweet pineapple juice, naturally refreshing.",
      available:"true"
    },
    {
      id: 19,
      type: "juice",
      name: "Watermelon Juice",
      category: "Fresh Juices",
      price: { perLiter: 110 },
      image: "./assets/watermelonjuice.png",
      description: "Hydrating watermelon juice, perfect for summers.",
      available:"false"
    },
    {
      id: 20,
      type: "juice",
      name: "Custard Apple Juice",
      category: "Fresh Juices",
      price: { perLiter: 180 },
      image: "./assets/custaedapplejuice.png",
      description: "Creamy and refreshing, made from fresh custard apples.",
      available:"true"
    },
    {
      id: 21,
      type: "juice",
      name: "Papaya Juice",
      category: "Fresh Juices",
      price: { perLiter: 100 },
      image: "./assets/papayajuice.png",
      description: "Smooth and healthy, loaded with natural enzymes.",
      available:"true"
    },
    {
      id: 22,
      type: "juice",
      name: "Sugarcane Juice",
      category: "Natural Juices",
      price: { perLiter: 120 },
      image: "./assets/sugarcanejuice.png",
      description: "Stay refreshed with this naturally sweet and hydrating juice.",
      available:"true"
    },
    {
      id: 23,
      type: "juice",
      name: "Pomegranate Juice",
      category: "Fresh Juices",
      price: { perLiter: 200 },
      image: "./assets/pomogranatejuice.png",
      description: "A powerhouse of antioxidants in every sip.",
      available:"true"
    },
    {
      id: 24,
      type: "juice",
      name: "Mango Juice",
      category: "Fruit Juices",
      price: { perLiter: 180 },
      image: "./assets/mangojuice.png",
      description: "Enjoy the tropical sweetness of ripe mangoes in every sip.",
      available:"false"
    },{
      id: 57,
      type: "juice",
      name: "Banana Juice",
      category: "Fruit Juices",
      price: { "perLiter": 150 },
      image: "./assets/bananajuice.png",
      description: "Creamy and refreshing banana juice for a delightful treat.",
      available: "true"
    },
    {
      id: 58,
      type: "juice",
      name: "Lemonade",
      category: "Fruit Juices",
      price: { "perLiter": 120 },
      image: "./assets/lemonade.png",
      description: "Zesty and revitalizing lemonade to quench your thirst.",
      available: "true"
    },
    
    // Ice Creams
    {
      id: 25,
      type: "icecream",
      name: "Strawberry Ice Cream",
      category: "Ice Creams",
      price: { per200g: 250 },
      image: "./assets/strawberryice.png",
      description: "Creamy ice cream made with real strawberries.",
      available:"true"
    },
    {
      id: 26,
      type: "icecream",
      name: "Mango Ice Cream",
      category: "Ice Creams",
      price: { per200g: 280 },
      image: "./assets/mangoice.png",
      description: "Rich and smooth mango-flavored ice cream.",
      available:"false"
    },
    {
      id: 27,
      type: "icecream",
      name: "Coconut Ice Cream",
      category: "Exotic Ice Creams",
      price: { per200g: 300 },
      image: "./assets/coconutice.png",
      description: "A tropical treat made with fresh coconut milk.",
      available:"true"
    },
    {
      id: 28,
      type: "icecream",
      name: "Vanilla Ice Cream",
      category: "Classic Ice Creams",
      price: { per200g: 220 },
      image: "./assets/vanillaice.png",
      description: "Classic vanilla ice cream with a creamy texture.",
      available:"true"
    },
    {
      id: 29,
      type: "icecream",
      name: "Chocolate Ice Cream",
      category: "Classic Ice Creams",
      price: { per200g: 270 },
      image: "./assets/chocolateice.png",
      description: "Rich and decadent chocolate ice cream.",
      available:"true"
    },
    {
      id: 30,
      type: "icecream",
      name: "Berry Blast Ice Cream",
      category: "Premium Ice Creams",
      price: { per200g: 350 },
      image: "./assets/berryblast.png",
      description: "A burst of berry flavors in a creamy blend.",
      available:"true"
    },
    {
      id: 31,
      type: "icecream",
      name: "Malai Kesar Ice Cream",
      category: "Exotic Ice Creams",
      price: { "per200g": 280 },
      image: "./assets/malaikesarice.png",
      description: "Delight in the rich and creamy blend of malai with the essence of saffron in every bite.",
      available: "true"
    },
    {
      id: 32,
      type: "icecream",
      name: "Blueberry Ice Cream",
      category: "Premium Ice Creams",
      price: { per200g: 250 },
      image: "./assets/blueberryice.png",
      description: "Savor the delightful taste of fresh blueberries in every creamy scoop.",
      available:"true"
    }
    ,
    {
      id: 33,
      type: "icecream",
      name: "Custard Apple Ice Cream",
      category: "Exotic Ice Creams",
      price: { per200g: 270 },
      image: "./assets/custardappleice.png",
      description: "Experience the unique flavor of creamy custard apple in a luscious ice cream.",
      available:"true"
    }
    ,
    {
      id: 34,
      type: "icecream",
      name: "Jackfruit Ice Cream",
      category: "Exotic Ice Creams",
      price: { per200g: 340 },
      image: "./assets/jackfruitice.png",
      description: "Unique jackfruit flavor in a creamy base.",
      available:"false"
    },
    {
      id: 59,
      type: "icecream",
      name: "Malai Kulfi",
      category: "Exotic Ice Creams",
      price: { "per200g": 250 },
      image: "./assets/malaikulfi.png",
      description: "Rich and creamy Malai Kulfi, a classic Indian dessert.",
      available: "true"
    },
    {
      id: 60,
      type: "icecream",
      name: "Kesar Pista Ice Cream",
      category: "Exotic Ice Creams",
      price: { "per200g": 300 },
      image: "./assets/kesarpistaice.png",
      description: "Indulge in the luxurious flavor of saffron and pistachios in this delightful ice cream.",
      available: "true"
    },    
    //dried fruits
    {
      id: 35,
      type: "Dried Fruits",
      name: "Almonds",
      category: "Nuts",
      price: { "perKg": 700 },
      image: "./assets/almonds.png",
      description: "High-quality almonds packed with nutrition.",
      available: "true"
    },
    {
      id: 36,
      type: "Dried Fruits",
      name: "Cashews",
      category: "Nuts",
      price: { "perKg": 850 },
      image: "./assets/cashews.png",
      description: "Premium cashews with a rich, creamy taste.",
      available: "true"
    },
    {
      id: 37,
      type: "Dried Fruits",
      name: "Pistachios",
      category: "Nuts",
      price: { "perKg": 950 },
      image: "./assets/pistachios.png",
      description: "Roasted pistachios, perfect for snacking.",
      available: "true"
    },
    {
      id: 38,
      type: "Dried Fruits",
      name: "Walnuts",
      category: "Nuts",
      price: { "perKg": 780 },
      image: "./assets/walnuts.png",
      description: "Fresh walnuts, rich in omega-3 fatty acids.",
      available: "true"
    },
    {
      id: 39,
      type: "Dried Fruits",
      name: "Raisins",
      category: "Nuts",
      price: { "perKg": 350 },
      image: "./assets/raisins.png",
      description: "Sweet and plump raisins for every occasion.",
      available: "true"
    },
    {
      id: 40,
      type: "Dried Fruits",
      name: "Dates",
      category: "Nuts",
      price: { "perKg": 500 },
      image: "./assets/dates.png",
      description: "Delicious and naturally sweet dates.",
      available: "true"
    },
    {
      id: 41,
      type: "Dried Fruits",
      name: "Figs",
      category: "Nuts",
      price: { "perKg": 600 },
      image: "./assets/figs.png",
      description: "Chewy and flavorful dried figs.",
      available: "true"
    },
    {
      id: 42,
      type: "Dried Fruits",
      name: "Apricots",
      category: "Nuts",
      price: { "perKg": 700 },
      image: "./assets/apricots.png",
      description: "Tangy and sweet dried apricots.",
      available: "true"
    },
    {
      id: 43,
      type: "Dried Fruits",
      name: "Prunes",
      category: "Nuts",
      price: { "perKg": 650 },
      image: "./assets/prunes.png",
      description: "Juicy and healthy dried prunes.",
      available: "true"
    },
    {
      id: 44,
      type: "Dried Fruits",
      name: "Hazelnuts",
      category: "Nuts",
      price: { "perKg": 900 },
      image: "./assets/hazelnuts.png",
      description: "Crunchy hazelnuts for snacking and baking.",
      available: "true"
    },
    {
      id: 45,
      type: "Dried Fruits",
      name: "Pecans",
      category: "Nuts",
      price: { "perKg": 1100 },
      image: "./assets/pecans.png",
      description: "Rich and buttery pecans.",
      available: "true"
    },
    {
      id: 46,
      type: "Dried Fruits",
      name: "Macadamia Nuts",
      category: "Nuts",
      price: { "perKg": 1500 },
      image: "./assets/macadamia.png",
      description: "Luxurious macadamia nuts for a gourmet treat.",
      available: "true"
    },
    {
      id: 49,
      type: "Dried Fruits",
      name: "Dried Cranberries",
      category: "Nuts",
      price: { "perKg": 400 },
      image: "./assets/cranberries.png",
      description: "Sweet and tart dried cranberries.",
      available: "true"
    },
    {
      id: 50,
      type: "Dried Fruits",
      name: "Dried Mango",
      category: "Dried Fruits",
      price: { "perKg": 700 },
      image: "./assets/dried_mango.png",
      description: "Tropical dried mango slices.",
      available: "true"
    },
    {
      id: 51,
      type: "Dried Fruits",
      name: "Dried Pineapple",
      category: "Dried Fruits",
      price: { "perKg": 750 },
      image: "./assets/dried_pineapple.png",
      description: "Sweet and chewy dried pineapple rings.",
      available: "true"
    },
    {
      id: 52,
      type: "Dried Fruits",
      name: "Dried Blueberries",
      category: "Dried Fruits",
      price: { "perKg": 1200 },
      image: "./assets/blueberries.png",
      description: "Bursting with flavor dried blueberries.",
      available: "true"
    },
    {
      id: 53,
      type: "Dried Fruits",
      name: "Dried Strawberries",
      category: "Dried Fruits",
      price: { "perKg": 850 },
      image: "./assets/dried_strawberries.png",
      description: "Sweet and flavorful dried strawberries.",
      available: "true"
    },
    {
      id: 54,
      type: "Dried Fruits",
      name: "Dried Kiwi",
      category: "Dried Fruits",
      price: { "perKg": 800 },
      image: "./assets/dried_kiwi.png",
      description: "Tangy dried kiwi slices.",
      available: "true"
    },
    {
      id: 55,
      type: "Dried Fruits",
      name: "Dried Peaches",
      category: "Dried Fruits",
      price: { "perKg": 750 },
      image: "./assets/dried_peaches.png",
      description: "Soft and flavorful dried peach slices.",
      available: "true"
    },
    {
      id: 56,
      type: "Dried Fruits",
      name: "Dried Coconut",
      category: "Dried Fruits",
      price: { "perKg": 550 },
      image: "./assets/dried_coconut.png",
      description: "Crispy and delicious dried coconut flakes.",
      available: "true"
    }
  ];
  
//reviews
const reviews = [
  {
    name: "Aarav Mehta",
    review: "JuicyMelt truly lives up to its name! The fruits are fresh, juicy, and melt-in-your-mouth delicious. My favorite is their Alphonso mangoes. Highly recommend it!",
    image: "./assets/r1.jpg",
    rating: 5,
  },
  {
    name: "Isha Sharma",
    review: "JuicyMelt's fruit juices are simply amazing! The Mixed Berry Juice is refreshing and packed with flavor. A must-try for juice lovers.",
    image: "./assets/r2.jpg",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    review: "The dried fruits from JuicyMelt are of premium quality. Their almonds and pistachios are perfect for healthy snacking. It's my go-to brand now!",
    image: "./assets/r3.jpg",
    rating: 5,
  },
  {
    name: "Priya Nair",
    review: "JuicyMelt's ice creams are out of this world! The Mango and Kesar Pista flavors are so creamy and flavorful. It feels like summer in a bowl!",
    image: "./assets/r4.jpg",
    rating: 5,
  },
  {
    name: "Karan Gupta",
    review: "JuicyMelt offers an impressive variety of fruits. Their guavas and kiwis are always fresh and flavorful. A trusted brand for quality fruits.",
    image: "./assets/r5.jpg",
    rating: 4,
  },
  {
    name: "Sanya Kapoor",
    review: "I’ve been buying dried fruits from JuicyMelt for a while now, and the quality never disappoints. Their walnuts and cashews are top-notch!",
    image: "./assets/r6.jpg",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    review: "JuicyMelt's juices are a game changer. The Sugarcane Juice tastes like it’s fresh from the fields. Love their commitment to quality.",
    image: "./assets/r7.jpg",
    rating: 4,
  },
  {
    name: "Aditi Rao",
    review: "The ice creams by JuicyMelt are a treat! Coconut Ice Cream is my favorite. It’s creamy, smooth, and full of authentic flavor. Great work, JuicyMelt!",
    image: "./assets/r8.jpg",
    rating: 5,
  },
  {
    name: "Nikhil Verma",
    review: "I’ve been ordering fruits from JuicyMelt regularly, and their service and product quality are excellent. The bananas and apples are always fresh.",
    image: "./assets/r9.jpg",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    review: "JuicyMelt never fails to impress. Their Berry Juice is a perfect blend of sweet and tart flavors. A refreshing way to start my day!",
    image: "./assets/r10.jpg",
    rating: 3,
  },
];
