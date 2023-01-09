var uh1 = 70, //contoh nilai UH1 70, UH2 75, UH3 72, UH4 80
    uh2 = 75, 
    uh3 = 72, 
    uh4 = 80;

var nilaiUh = ((uh1 + uh2 + uh3 + uh4) / 4) * 70/100; //rata-rata nilai UH abistu bagi 70%
var nilaiPas = 90 * 30/100; //contoh nilai PAS 90 dikali 30%

var nilaiAkhir = nilaiUh + nilaiPas; //jumlahin nilai UH sama nilai PAS

console.log(nilaiAkhir); //disini keluar hasilnya 78.975