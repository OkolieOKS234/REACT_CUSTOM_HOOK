const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" },
];

const cryptocurrencies = [
  {
    name: "bitcoin",
    shortForm: "BTC",
    fullDetails: {
      yearCreated: 2009,
      allTimeHigh: 66000,
    },
  },
  {
    name: "Ethereum",
    shortForm: "ETH",
    fullDetails: {
      yearCreated: 2018,
      allTimeHigh: 4000,
    },
  },
];

function useCryptocurrency(cryptocurrency) {
  return [
    cryptocurrency.name,
    function () {
      console.log(cryptocurrency.shortForm);
    },
  ];
}

export default cryptocurrencies;
export { useCryptocurrency };
