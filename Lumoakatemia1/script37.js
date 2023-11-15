const taulukko = [6, 7, 2, 4, 3, 8, 1];
let maksimi = 0;

for (let i = 0; i < taulukko.length; i++) {
    if (taulukko[i] > maksimi) {
        maksimi = taulukko[i];
    }
}

process.stdout.write('Taulukon [ ');
for (let i = 0; i < taulukko.length; i++) {
    process.stdout.write(`${taulukko[i]} `);
}
console.log(`] maksimiarvo on ${maksimi}`);