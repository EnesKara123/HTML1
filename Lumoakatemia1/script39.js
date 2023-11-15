const taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
let laskuri = 0;

for (let i = 0; i < taulukko.length; i++) {
    if (taulukko[i] % 2 !== 0) {
        laskuri++;

        if (laskuri === 7) {
            console.log(`Taulukon 6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3 seitsem\u00E4s pariton luku on: ${taulukko[i]}`);
            break;
        }
    }
}