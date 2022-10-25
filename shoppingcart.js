const book = ({title: 'azka keren', price : 10000, printing_status: true});

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
      console.log("stock habis");
      break;
    }
  }
  return result;
}

console.log(priceCalculator(book, 40, 10, 4, 4))