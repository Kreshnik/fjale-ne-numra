let Numbers = {
  zero: 0,
  nje: 1,
  dy: 2,
  tri: 3,
  tre: 3,
  kater: 4,
  pese: 5,
  gjate: 6,
  shtate: 7,
  tete: 8,
  nente: 9,
  dhjete: 10,
  njembedhjete: 11,
  dymbedhjete: 12,
  trembedhjete: 13,
  katermbedhjete: 14,
  pesembedhjete: 15,
  gjatembedhjete: 16,
  shtatembedhjete: 17,
  tetembedhjete: 18,
  nentembedhjete: 19,
  njezet: 20,
  tridhjete: 30,
  katerdhjete: 40,
  pesedhjete: 50,
  gjatedhjete: 60,
  shtatedhjete: 70,
  tetedhjete: 80,
  nentedhjete: 90,
  dyqind: 200,
  treqind: 300,
  katerqind: 400,
  peseqind: 500,
  gjashteqind: 600,
  shtateqind: 700,
  teteqind: 800,
  nenteqind: 900
};

let DecimalMagnitude = {
  qind: 100,
  mije: 1000,
  milion: 1000000,
  miliarde: 1000000000
};

function parseStringToNumber(stringToNumber) {
  let tokens = tokenize(stringToNumber);

  let subTotal = 0;
  let total = 0;

  tokens.forEach(token => {
    if (Numbers[token] != null) {
      subTotal += Numbers[token];
      return;
    }

    if (DecimalMagnitude[token] != null) {
      total = total + subTotal * DecimalMagnitude[token];
      subTotal = 0;
    }
  });

  return subTotal + total;
}

function tokenize(string) {
  return string
    .toLowerCase()
    .replace("ë", "e")
    .match(/\S+/g);
}

module.exports = parseStringToNumber;
