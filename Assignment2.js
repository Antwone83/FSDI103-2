let productName = prompt(`Enter product name.`);
let quanity = prompt(`Enter quanity for ${productName}`);
let productPrice= prompt(`Price per ${productName} will be:`)
let stateTaxes= 1.6;

//productName += quanity + ` x .6 = ` + (productName * .6) + `<br />`;
let total= quanity * productPrice;
let subtotal=total*stateTaxes;



console.log(productName, quanity, productPrice, total);
console.log(quanity, productPrice);


let tmp=`productName: ${productName} \n Quanity: ${quanity} \n  productPrice: ${productPrice}`;
console.log(tmp);
console.log("productName: " + productName + ", Quanity: " + quanity + ", productPrice: " + productPrice + ",  subtotal: " +subtotal);
document.write(`<h2><center>You're reciept: ${quanity} ${productName} at ${productPrice} dollars, for a final price of= ${subtotal} dollars .</center></h2>`);
