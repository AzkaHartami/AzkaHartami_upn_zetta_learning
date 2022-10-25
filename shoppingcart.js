const books = 
[
 {
    nama  : 'azka',
    judul : 'buku keren',
    harga : 350000,
 },
    
 {
    nama  : 'hartami',
    judul : 'buku hebat',
    harga : 150000,
 },

 {
    nama  : 'azkahart',
    judul : 'buku kuat',
    harga : 250000,
 },
];

const result = books.group(({ judul }) => type);
console.log(result.azka);