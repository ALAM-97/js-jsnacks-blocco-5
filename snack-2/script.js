// 1. Crea 10 oggetti che rappresentano una zucchina.
// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// 3. Infine stampa separatamente quanto pesano i due gruppi di zucchine.


// 1.
const zucchine =
    [
        {
            "varietà": "zucchina1",
            "peso": 200,
            "lunghezza": 16
        },
        {
            "varietà": "zucchina2",
            "peso": 300,
            "lunghezza": 12
        },
        {
            "varietà": "zucchine3",
            "peso": 350,
            "lunghezza": 9
        },
        {
            "varietà": "zucchina4",
            "peso": 150,
            "lunghezza": 17
        },
        {
            "varietà": "zucchina5",
            "peso": 170,
            "lunghezza": 16
        },
        {
            "varietà": "zucchina6",
            "peso": 230,
            "lunghezza": 5
        },
        {
            "varietà": "zucchina7",
            "peso": 200,
            "lunghezza": 11
        },
        {
            "varietà": "zucchina8",
            "peso": 145,
            "lunghezza": 18
        },
        {
            "varietà": "zucchina9",
            "peso": 170,
            "lunghezza": 10
        },
        {
            "varietà": "zucchina10",
            "peso": 180,
            "lunghezza": 9
        },
    ];

let zucchinePiccole = [];
let zucchineGrandi = [];
let pesoTotPiccole = 0;
let pesoTotGrandi = 0;

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchinePiccole.push(zucchine[i]);
        pesoTotPiccole += zucchine[i].peso;
    } else {
        zucchineGrandi.push(zucchine[i]);
        pesoTotGrandi += zucchine[i].peso;
    }
}

console.log(zucchinePiccole);
console.log(zucchineGrandi);
console.log(`Il peso totale delle zucchine piccole è: ${pesoTotPiccole}`);
console.log(`Il peso totale delle zucchine grandi è: ${pesoTotGrandi}`);




