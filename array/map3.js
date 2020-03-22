Array.prototype.map2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const cart = [
  '{ "name": "Borracha", "price": 3.45 }',
  '{ "name": "Caderno", "price": 13.90 }',
  '{ "name": "Kit de Lapis", "price": 41.22 }',
  '{ "name": "Caneta", "price": 7.50 }',
];

const toObj = json => JSON.parse(json);

const getPrice = product => product.price;

const prices = cart.map2(toObj).map2(getPrice);

console.log(prices);
