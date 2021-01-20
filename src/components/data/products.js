    const products = [
    {
        categoryName: "Plantas del aire",
        categoryId: "plantas-del-aire",
        itemId: "air-01",
        itemName: "Nana",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 2990,
        offer: [false],
        images: ["air-plants/nana/nana-trans.png","air-plants/nana/nana1.jpg","air-plants/nana/nana2.jpg","air-plants/nana/nana3.jpg"],
        alt: "nana",
        stock: 20
    },
    {
        categoryName: "Plantas del aire",
        categoryId: "plantas-del-aire",
        itemId: "air-02",
        itemName: "Tillandsia Brachycaulos",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 2990,
        offer: [true, 1990],
        images: ["air-plants/tillandsia-brachycaulos/brachycaulos-trans.png","air-plants/tillandsia-brachycaulos/brachycaulos1.jpg","air-plants/tillandsia-brachycaulos/brachycaulos2.jpg"],
        alt: "tillandsia-brachycaulos",
        stock: 20
    },
    {
        categoryName: "Plantas del aire",
        categoryId: "plantas-del-aire",
        itemId: "air-03",
        itemName: "Tillandsia Ionantha Guatemala",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3990,
        offer: [true, 2490],
        images: ["air-plants/tillandsia-ionantha-guatemala/guatemala-trans.png","air-plants/tillandsia-ionantha-guatemala/guatemala1.jpg","air-plants/tillandsia-ionantha-guatemala/guatemala2.jpg","air-plants/tillandsia-ionantha-guatemala/guatemala3.jpg","air-plants/tillandsia-ionantha-guatemala/guatemala4.jpg","air-plants/tillandsia-ionantha-guatemala/guatemala5.jpg","air-plants/tillandsia-ionantha-guatemala/guatemala6.jpg"],
        alt: "tillandsia-ionantha-guatemala",
        stock: 20
    },
    {
        categoryName: "Plantas del aire",
        categoryId: "plantas-del-aire",
        itemId: "air-04",
        itemName: "Tillandsia Ionantha Rubra",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 2990,
        offer: [false],
        images: ["air-plants/tillandsia-ionantha-rubra/rubra-trans.png","air-plants/tillandsia-ionantha-rubra/rubra1.jpg","air-plants/tillandsia-ionantha-rubra/rubra2.jpg","air-plants/tillandsia-ionantha-rubra/rubra3.jpg","air-plants/tillandsia-ionantha-rubra/rubra4.jpg"],
        alt: "tillandsia-ionantha-rubra",
        stock: 20
    },
    {
        categoryName: "Crassula",
        categoryId: "crassula",
        itemId: "crass-01",
        itemName: "Baby Necklace",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3990,
        offer: [false],
        images: ["crassula/baby-necklace/baby-trans.png","crassula/baby-necklace/baby1.jpg","crassula/baby-necklace/baby2.jpg","crassula/baby-necklace/baby3.jpg"],
        alt: "crassula-baby-necklace"
    },
    {
        categoryName: "Crassula",
        categoryId: "crassula",
        itemId: "crass-02",
        itemName: "Nudicaulis var. Herrei",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3990,
        offer: [true, 2490],
        images: ["crassula/nudicaulis-herrei/nudicaulis-trans.png","crassula/nudicaulis-herrei/nudicaulis1.jpg","crassula/nudicaulis-herrei/nudicaulis2.jpg","crassula/nudicaulis-herrei/nudicaulis3.jpg","crassula/nudicaulis-herrei/nudicaulis4.jpg","crassula/nudicaulis-herrei/nudicaulis5.jpg"],
        alt: "crassula-nudicaulis-var-herrei",
        stock: 20
    },
    {
        categoryName: "Crassula",
        categoryId: "crassula",
        itemId: "crass-03",
        itemName: "Red Pagoda",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 5990,
        offer: [false],
        images: ["crassula/red-pagoda/red-pagoda-trans.png","crassula/red-pagoda/red-pagoda1.jpg","crassula/red-pagoda/red-pagoda2.jpg","crassula/red-pagoda/red-pagoda3.jpg","crassula/red-pagoda/red-pagoda4.jpg","crassula/red-pagoda/red-pagoda5.jpg"],
        alt: "crassula-red-pagoda",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-01",
        itemName: "Biznaga Espinosa",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 7990,
        offer: [false],
        images: ["cactus/biznaga-espinosa/biznaga-trans.png","cactus/biznaga-espinosa/biznaga1.jpg","cactus/biznaga-espinosa/biznaga2.jpg","cactus/biznaga-espinosa/biznaga3.jpg","cactus/biznaga-espinosa/biznaga4.jpg","cactus/biznaga-espinosa/biznaga5.jpg"],
        alt: "cactus-biznaga-espinosa",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-02",
        itemName: "Garambullo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 4990,
        offer: [false],
        images: ["cactus/garambullo/garambullo-trans.png","cactus/garambullo/garambullo1.jpg","cactus/garambullo/garambullo2.jpg","cactus/garambullo/garambullo3.jpg"],
        alt: "cactus-garambullo",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-03",
        itemName: "Echinocactus Grusonii",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 6990,
        offer: [true, 4490],
        images: ["cactus/echinocactus-grusonii/echinocactus-trans.png","cactus/echinocactus-grusonii/echinocactus1.jpg","cactus/echinocactus-grusonii/echinocactus2.jpg","cactus/echinocactus-grusonii/echinocactus3.jpg"],
        alt: "echinocactus-grusonii",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-04",
        itemName: "Ferocactus Hamatacanthus",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 5990,
        offer: [true, 2490],
        images: ["cactus/ferocactus-hamatacanthus/ferocactus-trans.png","cactus/ferocactus-hamatacanthus/ferocactus1.jpg","cactus/ferocactus-hamatacanthus/ferocactus2.jpg","cactus/ferocactus-hamatacanthus/ferocactus3.jpg"],
        alt: "ferocactus-hamatacanthus",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-05",
        itemName: "Pachycereus Marginatus",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 6990,
        offer: [false],
        images: ["cactus/pachycereus-marginatus/marginatus-trans.png","cactus/pachycereus-marginatus/marginatus1.jpg","cactus/pachycereus-marginatus/marginatus2.jpg","cactus/pachycereus-marginatus/marginatus3.jpg","cactus/pachycereus-marginatus/marginatus4.jpg"],
        alt: "pachycereus-marginatus",
        stock: 20
    },
    {
        categoryName: "Cactus",
        categoryId: "cactus",
        itemId: "cact-06",
        itemName: "Echinocereus Rigidissimus",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 6990,
        offer: [false],
        images: ["cactus/echinocereus-rigidissimus/rigidissimus-trans.png","cactus/echinocereus-rigidissimus/rigidissimus1.jpg","cactus/echinocereus-rigidissimus/rigidissimus2.jpg","cactus/echinocereus-rigidissimus/rigidissimus3.jpg"],
        alt: "echinocereus-rigidissimus",
        stock: 20
    },
    {
        categoryName: "Haworthia",
        categoryId: "aloe-haworthia",
        itemId: "haworth-01",
        itemName: "Limifolia Striata",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 8990,
        offer: [false],
        images: ["aloe-haworthia/haworthia-limifolia-striata/limifolia-trans.png","aloe-haworthia/haworthia-limifolia-striata/limifolia1.jpg","aloe-haworthia/haworthia-limifolia-striata/limifolia2.jpg","aloe-haworthia/haworthia-limifolia-striata/limifolia3.jpg"],
        alt: "haworthia-limifolia-striata",
        stock: 20
    },
    {
        categoryName: "Haworthia",
        categoryId: "aloe-haworthia",
        itemId: "haworth-02",
        itemName: "Limifolia Twister",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 9990,
        offer: [false],
        images: ["aloe-haworthia/haworthia-limifolia-twister/twister-trans.png","aloe-haworthia/haworthia-limifolia-twister/twister1.jpg","aloe-haworthia/haworthia-limifolia-twister/twister2.jpg","aloe-haworthia/haworthia-limifolia-twister/twister3.jpg","aloe-haworthia/haworthia-limifolia-twister/twister4.jpg"],
        alt: "haworthia-limifolia-twister",
        stock: 18
    },
    {
        categoryName: "Haworthia",
        categoryId: "aloe-haworthia",
        itemId: "haworth-03",
        itemName: "Zebra",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 7990,
        offer: [false],
        images: ["aloe-haworthia/haworthia-zebra/zebra-trans.png","aloe-haworthia/haworthia-zebra/zebra1.jpg","aloe-haworthia/haworthia-zebra/zebra2.jpg","aloe-haworthia/haworthia-zebra/zebra3.jpg","aloe-haworthia/haworthia-zebra/zebra4.jpg"],
        alt: "haworthia-zebra",
        stock: 18
    },
    {
        categoryName: "Aloe",
        categoryId: "aloe-haworthia",
        itemId: "aloe-01",
        itemName: "Christmas Carol",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 9990,
        offer: [false],
        images: ["aloe-haworthia/aloe-christmas-carol/christmas-trans.png", "aloe-haworthia/aloe-christmas-carol/christmas1.jpg","aloe-haworthia/aloe-christmas-carol/christmas2.jpg","aloe-haworthia/aloe-christmas-carol/christmas3.jpg"],
        alt: "aloe-christmas-carol",
        stock: 18
    },
    {
        categoryName: "Aloe",
        categoryId: "aloe-haworthia",
        itemId: "aloe-02",
        itemName: "Pink Blush",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 7490,
        offer: [true, 5690],
        images: ["aloe-haworthia/aloe-pink-blush/pink-blush-trans.png","aloe-haworthia/aloe-pink-blush/pink-blush1.jpg","aloe-haworthia/aloe-pink-blush/pink-blush2.jpg","aloe-haworthia/aloe-pink-blush/pink-blush3.jpg","aloe-haworthia/aloe-pink-blush/pink-blush4.jpg"],
        alt: "aloe-pink-blush",
        stock: 25
    },
    {
        categoryName: "Aoenium",
        categoryId: "aoenium",
        itemId: "aoen-01",
        itemName: "Black Rose",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3490,
        offer: [false],
        images: ["aoenium/black-rose/black-rose-trans.png","aoenium/black-rose/black-rose1.jpg","aoenium/black-rose/black-rose2.jpg","aoenium/black-rose/black-rose3.jpg","aoenium/black-rose/black-rose4.jpg","aoenium/black-rose/black-rose5.jpg","aoenium/black-rose/black-ros61.jpg"],
        alt: "aoenium-black-rose",
        stock: 25
    },
    {
        categoryName: "Aoenium",
        categoryId: "aoenium",
        itemId: "aoen-02",
        itemName: "Kiwi",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 2490,
        offer: [false],
        images: ["aoenium/kiwi/kiwi-trans.png","aoenium/kiwi/kiwi1.jpg","aoenium/kiwi/kiwi2.jpg","aoenium/kiwi/kiwi3.jpg","aoenium/kiwi/kiwi4.jpg","aoenium/kiwi/kiwi5.jpg"],
        alt: "aoenium-kiwi",
        stock: 25
    },
    {
        categoryName: "Aoenium",
        categoryId: "aoenium",
        itemId: "aoen-03",
        itemName: "Lily Pad Rosettes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 6990,
        offer: [false],
        images: ["aoenium/lily-pad-rosettes/lily-pad-trans.png","aoenium/lily-pad-rosettes/lily-pad1.jpg","aoenium/lily-pad-rosettes/lily-pad2.jpg","aoenium/lily-pad-rosettes/lily-pad3.jpg","aoenium/lily-pad-rosettes/lily-pad4.jpg"],
        alt: "aoenium-lily-pad-rosettes",
        stock: 25
    },
    {
        categoryName: "Aoenium",
        categoryId: "aoenium",
        itemId: "aoen-04",
        itemName: "Mardi Gras Rosettes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 7990,
        offer: [true, 5490],
        images: ["aoenium/mardi-gras-rosettes/mardi-gras-trans.png","aoenium/mardi-gras-rosettes/mardi-gras1.jpg","aoenium/mardi-gras-rosettes/mardi-gras2.jpg","aoenium/mardi-gras-rosettes/mardi-gras3.jpg","aoenium/mardi-gras-rosettes/mardi-gras4.jpg"],
        alt: "aoenium-mardi-gras-rosettes",
        stock: 25
    },
    {
        categoryName: "Echeveria",
        categoryId: "echeveria",
        itemId: "echev-01",
        itemName: "Elegans Blue",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3990,
        offer: [false],
        images: ["echeveria/elegans-blue/elegans-blue-trans.png","echeveria/elegans-blue/elegans-blue1.jpg","echeveria/elegans-blue/elegans-blue2.jpg"],
        alt: "echeveria-elegans-blue",
        stock: 18
    },
    {
        categoryName: "Echeveria",
        categoryId: "echeveria",
        itemId: "echev-02",
        itemName: "Ramillete",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 6790,
        offer: [true, 4990],
        images: ["echeveria/ramillete/ramillete-trans.png","echeveria/ramillete/ramillete1.jpg","echeveria/ramillete/ramillete2.jpg","echeveria/ramillete/ramillete3.jpg","echeveria/ramillete/ramillete4.jpg"],
        alt: "echeveria-ramillete",
        stock: 18
    },
    {
        categoryName: "Echeveria",
        categoryId: "echeveria",
        itemId: "echev-03",
        itemName: "White Rose",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 3490,
        offer: [false],
        images: ["echeveria/white-rose/white-rose-trans.png","echeveria/white-rose/white-rose1.jpg","echeveria/white-rose/white-rose2.jpg","echeveria/white-rose/white-rose3.jpg"],
        alt: "echeveria-white-rose",
        stock: 18
    },
    {
        categoryName: "Echeveria",
        categoryId: "echeveria",
        itemId: "echev-04",
        itemName: "Purpusorum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 5490,
        offer: [false],
        images: ["echeveria/purpusorum-berger/purpusorum-trans.png","echeveria/purpusorum-berger/purpusorum1.jpg","echeveria/purpusorum-berger/purpusorum2.jpg","echeveria/purpusorum-berger/purpusorum3.jpg"],
        alt: "echeveria-purpusorum-a-berger",
        stock: 18
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-01",
        itemName: "Pack vidrio",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 7990,
        offer: [false],
        images: ["maceteros/black-and-white-glass-pots/glass-trans.png", "maceteros/black-and-white-glass-pots/black-white1.jpg","maceteros/black-and-white-glass-pots/black-white2.jpg","maceteros/black-and-white-glass-pots/black-white3.jpg","maceteros/black-and-white-glass-pots/black-white4.jpg"],
        alt: "maceteros-vidrio-blanco-y-negro",
        stock: 18
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-02",
        itemName: "Pack Chevron",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 8990,
        offer: [false],
        images: ["maceteros/chevron-pattern-pots/chevron-trans.png","maceteros/chevron-pattern-pots/chevron1.jpg","maceteros/chevron-pattern-pots/chevron2.jpg","maceteros/chevron-pattern-pots/chevron3.jpg"],
        alt: "maceteros-patron-chevron",
        stock: 8
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-03",
        itemName: "Pack Huevo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 8990,
        offer: [true, 6990],
        images: ["maceteros/egg-pots/egg-trans.png","maceteros/egg-pots/egg1.jpg","maceteros/egg-pots/egg2.jpg","maceteros/egg-pots/egg3.jpg","maceteros/egg-pots/egg4.jpg","maceteros/egg-pots/egg5.jpg","maceteros/egg-pots/egg6.jpg","maceteros/egg-pots/egg7.jpg","maceteros/egg-pots/egg8.jpg"],
        alt: "maceteros-huevo",
        stock: 17
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-04",
        itemName: "Pack Borde Dorado",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 9990,
        offer: [false],
        images: ["maceteros/gold-rim-pots/gold-trans.png","maceteros/gold-rim-pots/gold1.jpg","maceteros/gold-rim-pots/gold2.jpg","maceteros/gold-rim-pots/gold3.jpg","maceteros/gold-rim-pots/gold4.jpg","maceteros/gold-rim-pots/gold5.jpg","maceteros/gold-rim-pots/gold6.jpg","maceteros/gold-rim-pots/gold7.jpg"],
        alt: "maceteros-borde-dorado",
        stock: 13
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-05",
        itemName: "Pack Geométrico Moderno",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 10990,
        offer: [false],
        images: ["maceteros/modern-geometric-pots/geometric-trans.png","maceteros/modern-geometric-pots/geometric1.jpg","maceteros/modern-geometric-pots/geometric2.jpg","maceteros/modern-geometric-pots/geometric3.jpg","maceteros/modern-geometric-pots/geometric4.jpg","maceteros/modern-geometric-pots/geometric5.jpg"],
        alt: "maceteros-geometricos-moderno",
        stock: 23
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-06",
        itemName: "Pack Glitter Redondo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 9990,
        offer: [false],
        images: ["maceteros/round-glitter-pots/glitter-trans.png","maceteros/round-glitter-pots/glitter1.jpg","maceteros/round-glitter-pots/glitter2.jpg","maceteros/round-glitter-pots/glitter3.jpg","maceteros/round-glitter-pots/glitter4.jpg","maceteros/round-glitter-pots/glitter5.jpg"],
        alt: "maceteros-glitter-redondos",
        stock: 30
    },
    {
        categoryName: "Maceteros",
        categoryId: "maceteros",
        itemId: "macet-07",
        itemName: "Pack Chispeante",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas dignissimos doloremque dolore sunt placeat, rerum nostrum tenetur facere praesentium fuga magnam molestias quaerat nisi, expedita laboriosam consequatur eaque laudantium",
        price: 10990,
        offer: [true, 8490],
        images: ["maceteros/sparkly-pots/sparkly-trans.png","maceteros/sparkly-pots/sparkly1.jpg","maceteros/sparkly-pots/sparkly2.jpg","maceteros/sparkly-pots/sparkly3.jpg","maceteros/sparkly-pots/sparkly4.jpg"],
        alt: "maceteros-chispeantes",
        stock: 15
    }
];

export default products;