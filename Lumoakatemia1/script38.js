console.log('teht\u00E4v\u00E4 6:');
const tallukko = [6, 7, 2, 4, 3, 8, 1];
const keskiarvo = tallukko.reduce((a, b) => a + b, 0) / tallukko.length;

console.log(`Taulukon [ ${tallukko.join(' ')} ] keskiarvo on ${keskiarvo}`);