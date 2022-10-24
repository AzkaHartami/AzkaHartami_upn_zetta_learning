const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const diskon = 30/100;
  const pajak = 10/100;
  let selamat = "selamat anda mendapatkan diskon 30%";
  const minimalbuku = 50000;
  
  readline.question('Harga buku : ', harga => {
    Boolean (harga >= minimalbuku);
    console.log(selamat);
    console.log(`diskon 30% : ${harga * diskon}`);
    var hargadiskon = harga * diskon;
    console.log(`Harga setelah diskon : ${harga - hargadiskon}`);
    var hargadiskon = harga - hargadiskon;
    console.log(`Pajak 10% : ${hargadiskon * pajak}`);
    var hargapajak = hargadiskon * pajak;
    console.log(`Harga setelah pajak : ${hargadiskon + hargapajak}`);
  
    readline.close();
  });