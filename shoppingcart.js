const book = ({title : 'azka keren', price : 100000});

function purchase (book, discount, tax)
{

    const price = book.price;
    const totalDiscount = price * (discount/100);
    const priceAfterDiscount = price - totalDiscount;
    const totalTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount + totalTax;
 

  console.group();
    console.log('Harga Awal', price);
    console.log('Pengurangan Diskon', totalDiscount);
    console.log('Harga Setelah diskon', priceAfterDiscount);
    console.log('Pajak', totalTax);
    console.log('Harga setelah Pajak', priceAfterTax);
  console.groupEnd();
}

purchase(book, 40, 10)