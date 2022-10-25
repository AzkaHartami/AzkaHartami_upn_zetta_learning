function priceCalculator(book, discount, tax, stock, order)
{
  let result = 0;
  for (let loopIndex = 0; loopIndex < order; loopIndex++)
  {
    if (book && book.price && (loopIndex < stock))
    {
      const price = book.price;
      const totalDiscount = price * (discount/100);
      const priceAfterDiscount = price - totalDiscount;
      const totalTax = priceAfterDiscount * (tax/100);
      const priceAfterTax = priceAfterDiscount + totalTax;
      result += priceAfterTax;
    }
    else
    {
      console.log('buku dengan judul',book.title,'hanya dapat dibeli sesuai stock yang ada');
      break;
    }
  }
    return result; 
}


function totalcredit(result, credit)
{
  creditMonth = result / credit;
  return creditMonth;
}






console.log('cicilan/bulan : ',totalcredit(priceCalculator({title: 'azka sang tampan', price: 100000, printing_status: true},40, 10, 10, 5),12));
console.log('cicilan/bulan : ',totalcredit(priceCalculator({title: 'azka sang berani', price: 120000, printing_status: true},40, 10, 10, 12),12));
console.log('cicilan/bulan : ',totalcredit(priceCalculator({title: 'azka sang kuat', price: 200000, printing_status: true},30, 10, 10, 6),12));