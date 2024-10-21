/**
 * @typedef {Object} Product
 * @property {string} name - Navnet på produktet.
 * @property {number} price - Prisen på produktet.
 * @property {string} img - Bildet av produktet.
 * @property {string} description - Beskrivelse av produktet.
 * @property {string[]} allergens - Liste over allergener.
 * @property {number} unitsInStock - Antall enheter på lager.
 */

/**
 * @typedef {Object} CartItem
 * @property {string} name - Navnet på produktet.
 * @property {number} price - Prisen på produktet.
 * @property {number} quantity - Antall enheter i handlekurven.
 */

/**
 * Data for produktene, organisert etter kategori.
 * @type {Object.<string, Product[]>}
 */
const productsData = {
  baguetter: [
    {
      name: 'Baguette med reker',
      price: 90,
      img: 'baguette_reker.webp',
      description:
        'En saftig baguette fylt med ferske reker, sprø salat og en rik, kremet majones som smelter i munnen.',
      allergens: ['Skalldyr', 'Gluten', 'Egg'],
      unitsInStock: 25,
    },
    {
      name: 'Baguette med roastbiff',
      price: 95,
      img: 'baguette_roastbiff.webp',
      description:
        'En klassisk baguette med delikat roastbiff, toppet med smakfull remulade og sprø, karamellisert løk.',
      allergens: ['Gluten', 'Egg', 'Sennep'],
      unitsInStock: 15,
    },
    {
      name: 'Baguette med laks',
      price: 85,
      img: 'baguette_laks.webp',
      description:
        'Baguette fylt med silkemyk røkt laks, kremet eggerøre og friske urter – en perfekt kombinasjon av smak og tekstur.',
      allergens: ['Fisk', 'Egg', 'Gluten'],
      unitsInStock: 20,
    },
    {
      name: 'Baguette med karbonade',
      price: 95,
      img: 'baguette_karbonade.webp',
      description:
        'Smakfull karbonade servert på en fersk baguette, toppet med stekt løk for en ekte, norsk matopplevelse.',
      allergens: ['Gluten', 'Melk'],
      unitsInStock: 10,
    },
    {
      name: 'Baguette med falafel',
      price: 85,
      img: 'baguette_falafel.webp',
      description:
        'En sprø og smakfull vegetarisk baguette med hjemmelaget falafel, kremet hummus og friske grønnsaker.',
      allergens: ['Gluten', 'Sesam'],
      unitsInStock: 30,
    },
    {
      name: 'Baguette med avocado',
      price: 80,
      img: 'baguette_vegetar.webp',
      description:
        'Frisk og sunn vegetarisk baguette fylt med moden avocado, saftige tomater og søt løk.',
      allergens: ['Gluten'],
      unitsInStock: 25,
    },
  ],
  snitter: [
    {
      name: 'Snitter med roastbiff',
      price: 255,
      img: 'snitter_roastbiff.webp',
      description:
        '5 stk. smakfulle snitter med mør roastbiff, delikat remulade og sprøstekt løk – perfekt for alle anledninger.',
      allergens: ['Gluten', 'Egg', 'Sennep'],
      unitsInStock: 10,
    },
    {
      name: 'Snitter med reker',
      price: 260,
      img: 'snitter_reker.webp',
      description:
        '5 stk. klassiske snitter med ferske, håndplukkede reker, luftig majones og sprø salat.',
      allergens: ['Skalldyr', 'Gluten', 'Egg'],
      unitsInStock: 12,
    },
    {
      name: 'Snitter med karbonade',
      price: 260,
      img: 'snitter_karbonade.webp',
      description:
        '5 stk. tradisjonelle snitter med saftige karbonader og stekt løk – en smak av hjemmelaget norsk mat.',
      allergens: ['Gluten', 'Melk'],
      unitsInStock: 15,
    },
    {
      name: 'Snitter med laks',
      price: 260,
      img: 'snitter_laks.webp',
      description:
        '5 stk. luksuriøse snitter med røkt laks, kremet eggerøre og en touch av frisk sitron.',
      allergens: ['Fisk', 'Gluten', 'Egg'],
      unitsInStock: 10,
    },
    {
      name: 'Snitter med avocado',
      price: 250,
      img: 'snitter_avocado.webp',
      description:
        '5 stk. friske vegetariske snitter med kremet avocado, sprø grønnsaker og et hint av sitrus.',
      allergens: ['Gluten'],
      unitsInStock: 20,
    },
    {
      name: 'Assorterte snitter',
      price: 265,
      img: 'snitter_assortert.webp',
      description:
        '5 stk. assorterte snitter med et utvalg av våre beste pålegg – perfekt for å tilfredsstille alle smaker.',
      allergens: ['Gluten', 'Egg', 'Fisk', 'Skalldyr'],
      unitsInStock: 30,
    },
  ],
  kaffe: [
    {
      name: 'Nybrygget kaffe',
      price: 35,
      img: 'kaffe_nybrygget-kaffe.webp',
      description:
        'Aromatisk nybrygget kaffe, laget med friske bønner for en fyldig smak.',
      allergens: [],
      unitsInStock: 50,
    },
    {
      name: 'Americano',
      price: 45,
      img: 'kaffe_americano.webp',
      description:
        'En klassisk Americano – fyldig espresso blandet med varmt vann for en ren og balansert kaffesmak.',
      allergens: [],
      unitsInStock: 50,
    },
    {
      name: 'Espresso',
      price: 40,
      img: 'kaffe_espresso.webp',
      description:
        'Intens og konsentrert espresso laget med de fineste espressobønnene – perfekt for en rask oppkvikker.',
      allergens: [],
      unitsInStock: 50,
    },
    {
      name: 'Cafe Latte',
      price: 50,
      img: 'kaffe_cafe-latte.webp',
      description:
        'En kremet latte laget med espresso og steamet melk – en perfekt kombinasjon av kaffe og fløyelsmyk melk.',
      allergens: ['Melk'],
      unitsInStock: 45,
    },
    {
      name: 'Cappuccino',
      price: 50,
      img: 'kaffe_cappuccino.webp',
      description:
        'En klassisk cappuccino med rik espresso, toppet med skummet melk for en perfekt balanse.',
      allergens: ['Melk'],
      unitsInStock: 40,
    },
    {
      name: 'Macchiato',
      price: 50,
      img: 'kaffe_macchiato.webp',
      description:
        'Espresso toppet med et hint av skummet melk – en elegant og fyldig kaffeopplevelse.',
      allergens: ['Melk'],
      unitsInStock: 30,
    },
  ],
  kake: [
    {
      name: 'Sjokoladekake',
      price: 550,
      img: 'kake_sjokoladekake.webp',
      description:
        'En rik og fuktig sjokoladekake med kremet sjokoladeglasur – perfekt for alle sjokoladeelskere.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 5,
    },
    {
      name: 'Gulrotkake',
      price: 540,
      img: 'kake_gulrotkake.webp',
      description:
        'Saftig gulrotkake fylt med ferske gulrøtter, toppet med silkemyk kremostglasur.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 4,
    },
    {
      name: 'Ostekake',
      price: 540,
      img: 'kake_ostekake.webp',
      description:
        'En klassisk ostekake laget med en fyldig ostekrem og dekorert med friske bær.',
      allergens: ['Gluten', 'Melk'],
      unitsInStock: 6,
    },
    {
      name: 'Regnbuekake',
      price: 540,
      img: 'kake_regnbuekake.webp',
      description:
        'En fargerik regnbuekake lagd med flere lag av luftig kake, fylt med vaniljekrem og toppet med krem.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 3,
    },
    {
      name: 'Dronning Maudskake',
      price: 540,
      img: 'kake_dronning-mauds-kake.webp',
      description:
        'Dronning Mauds favoritt – en delikat kombinasjon av sjokolademousse og fløyelsmyk krem.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 2,
    },
    {
      name: 'Kvæfjordkake',
      price: 540,
      img: 'kake_verdens-beste.webp',
      description:
        'Kjent som "Verdens Beste" – marengs og vaniljekrem mellom lag av luftig kake.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 4,
    },
  ],
  temakaker: [
    {
      name: 'Bryllupskake',
      price: 1600,
      img: 'kake_bryllupskake.webp',
      description:
        'En elegant bryllupskake, delikat dekorert etter dine ønsker, med smaker som matcher din spesielle dag.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 2,
    },
    {
      name: 'Bursdagskake',
      price: 900,
      img: 'kake_bursdagskake.webp',
      description:
        'En festlig bursdagskake, skreddersydd til bursdagsbarnets smak og stil.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 5,
    },
    {
      name: 'Fotballkake',
      price: 900,
      img: 'kake_fotballkake.webp',
      description:
        'Fotballkake perfekt for sportsentusiaster – pyntet som en fotballbane, med din favorittlagfarger.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 4,
    },
    {
      name: 'Prinsessekake',
      price: 900,
      img: 'kake_prinsessekake.webp',
      description:
        'En eventyrlig prinsessekake, ideell for ethvert prinsessefest – med rosa pynt og glitter.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 3,
    },
    {
      name: 'Dinosaurkake',
      price: 900,
      img: 'kake_dinosaurkake.webp',
      description:
        'En eventyrlig dinosaurkake – perfekt for små eventyrere som elsker dinosaurer.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 2,
    },
    {
      name: '17. mai kake',
      price: 900,
      img: 'kake_17maikake.webp',
      description:
        'En patriotisk kake dekorert med norske flagg, perfekt for 17. mai-feiringen.',
      allergens: ['Gluten', 'Melk', 'Egg'],
      unitsInStock: 4,
    },
  ],
};

/**
 * Handlekurvdata som inneholder produkter lagt til i handlekurven.
 * @type {CartItem[]}
 */
let cart = [];

/**
 * Legger til et produkt i handlekurven.
 *
 * @param {string} name - Navnet på produktet som skal legges til.
 * @param {number} price - Prisen på produktet.
 * @param {number} [quantity=1] - Antall enheter som skal legges til. Standard er 1.
 */
function addToCart(name, price, quantity = 1) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
}

/**
 * Fjerner et produkt fra handlekurven basert på produktets navn.
 *
 * @param {string} name - Navnet på produktet som skal fjernes.
 */
function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
}

/**
 * Tømmer hele handlekurven ved å fjerne alle produkter.
 */
function clearCart() {
  cart = [];
}

/**
 * Henter alle produkter som er lagt til i handlekurven.
 *
 * @returns {CartItem[]} En liste over produkter i handlekurven.
 */
function getCartItems() {
  return cart;
}

/**
 * Henter produkter basert på den angitte kategorien.
 *
 * @param {string} category - Kategorien som produktene skal hentes fra.
 * @returns {Product[]} En liste over produkter i den spesifiserte kategorien.
 */
function getProductsByCategory(category) {
  return productsData[category] || [];
}
