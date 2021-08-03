 var productName1 = prompt( "1. Ürünün Adı");
 var productAmount1 = Number(prompt( "1. Ürün Adet"));
 var productPrice1 = Number(prompt( "1. Ürün Fiyat"));

    var productName2 = prompt( "2. Ürünün Adı");
   var productAmount2 = Number(prompt( "2. Ürün Adet"));
  var productPrice2 = Number(prompt( "2. Ürün Fiyat"));


//  var totalPrice = productAmount + productPrice;
//  console.log(totalPrice);

//  alert("1. Ürünün Fiyatı: " + (productAmount * productPrice));
var product1=
{
    name: productName1,
    amount: productAmount1,
    price: productPrice1,
    totalPrice: (productAmount1 * productPrice1)

};
var product2 = {
    name: productName2,
    amount: productAmount2,
    price: productPrice2,
    totalPrice: (productAmount2 * productPrice2)


};
var order = [product1, product2];
//  console.log(order);

 var orderTotalPrice = orderTotalPriceCalculate(order);
 function orderTotalPriceCalculate(order)
 {

 let totalPrice = 0;
 order.forEach(function (item)
 {

 totalPrice += item.totalPrice;
    
 });

 return totalPrice;

 }




 
// alert(orderTotalPrice);
 


 

document.getElementById("urunAdi1").innerText = product1.name;
document.getElementById("urunAdet1").innerText = product1.amount;
document.getElementById("urunFiyat1").innerText = product1.price;
document.getElementById("urunToplamFiyat1").innerText = product1.totalPrice;

document.getElementById("urunAdi2").innerText = product2.name;
document.getElementById("urunAdet2").innerText = product2.amount;
document.getElementById("urunFiyat2").innerText = product2.price;
document.getElementById("urunToplamFiyat2").innerText = product2.totalPrice;


document.getElementById("orderTotalPrice").innerText="Sepet Toplam Fiyatı: " + orderTotalPrice;





