"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2)-(4*a*c);

  if (d === 0) {
    let root = -b/(2*a);
    arr.push(root);
  } else if (d > 0) {
    let rootFirst = (-b + Math.sqrt(d) )/(2*a);
    let rootSecond = (-b - Math.sqrt(d) )/(2*a);
    arr.push(rootFirst);
    arr.push(rootSecond);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/100/12;
  let S = amount - contribution;
  let paymentMonth = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let paymentTotal = paymentMonth * countMonths;
  paymentTotal = Number(paymentTotal.toFixed(2));

  return paymentTotal;
}