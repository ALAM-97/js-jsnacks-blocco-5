// 1. Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// 2. Calcola quanto pesano tutte le zucchine.

// 1.
const zucchine = 
[
    {
        "varietà" :  "zucchina1",
        "peso" :  200,
        "lunghezza" : 10
    },
    {
        "varietà":  "zucchina2",
        "peso":  300,
        "lunghezza": 12
    },
    {
    "varietà":  "zucchine3",
        "peso":  350,
        "lunghezza": 9
    },
    {
        "varietà":  "zucchina4",
        "peso":  150,
        "lunghezza": 8
    },
    {
        "varietà": "zucchina5" ,
        "peso":  170,
        "lunghezza": 7
    },
    {
        "varietà":  "zucchina6",
        "peso":  230,
        "lunghezza": 5
    },
    {
        "varietà": "zucchina7",
        "peso":  200,
        "lunghezza": 11
    },
    {
        "varietà": "zucchina8",
        "peso":  145,
        "lunghezza": 8
    },
    {
        "varietà": "zucchina9" ,
        "peso":  170,
        "lunghezza": 10
    },
    {
        "varietà":  "zucchina10",
        "peso":  180,
        "lunghezza": 9
    },
]

let pesoTot = 0;

for (let i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso;
}

console.log(`Il peso totale di tutte le zucchine è: ${pesoTot}gr`)