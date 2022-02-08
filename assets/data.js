const { nanoid } = require("nanoid");

const data = [
  {
    id: nanoid(),
    name: "Anacafe 14",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/assets/images/plant.png",
    },
    description:
      "Very high yielding variety, with rust resistance and good quality at elevations above 1300 meters. Variety not uniform.",
  },
  {
    id: nanoid(),
    name: "Bourbon",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/bourbon/img_2785-640x427-q50.jpg",
    },
    description:
      "One of the most culturally and genetically important C. arabica varieties in the world, known for excellent quality in the cup at the highest altitudes.",
  },
  {
    id: nanoid(),
    name: "Bourbon Mayaguez 71",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/bourbon-mayaguez-71/bm71-rwanda-640x853-q50.jpg",
    },
    description:
      "Moderate yield, good cup potential, and susceptible to major diseases. Adapted for medium altitudes. Found commonly in Rwanda and Burundi.",
  },
  {
    id: nanoid(),
    name: "Bourbon Mayaguez 139",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/bourbon-mayaguez-139/bm-139-496x662-q50.jpg",
    },
    description:
      "Vigorous and highly productive tall variety with very good cup quality. Found commonly in Rwanda and Burundi.",
  },
  {
    id: nanoid(),
    name: "Casiopea",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/casiopea/img_20160213_085814-640x1140-q50.jpg",
    },
    description:
      "High yielding variety, with exceptional quality at elevations above 1300 meters.",
  },
  {
    id: nanoid(),
    name: "Catimor 129",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/catimor-129/cat129-malawi-640x853-q50.jpg",
    },
    description:
      "High yielding dwarf variety resistant to coffee leaf rust and coffee berry disease. Found commonly in Malawi, Zambia, and Zimbabwe.",
  },
  {
    id: nanoid(),
    name: "Catisic",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/assets/images/plant.png",
    },
    description: "Adapted to warmest zones and acidic soils. High yielding.",
  },
  {
    id: nanoid(),
    name: "Catuai",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/catuai/catuai_1-640x427-q50.jpg",
    },
    description:
      "A compact plant with high yielding potential of standard quality in Central America. Very high susceptibility to coffee leaf rust.",
  },
  {
    id: nanoid(),
    name: "Caturra",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/caturra/catu-3-640x480-q50.jpg",
    },
    description:
      "A compact plant with good yielding potential of standard quality in Central America. Very high susceptibility to coffee leaf rust.",
  },
  {
    id: nanoid(),
    name: "Centroamericano",
    image: {
      url: "https://varieties.worldcoffeeresearch.org/thumbs/varieties/centroamericano/dscf9322-640x427-q50.jpg",
    },
    description:
      "Very high yielding with very good quality potential. Well-adapted for agroforestry.",
  },
];

module.exports = data;
