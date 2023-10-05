"use strict";

function solveEquation(a, b, c) {
	const dscrt = b ** 2 - 4 * a * c;

	if (dscrt < 0) {
		return [];
	} else if (dscrt === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(dscrt)) / (2 * a);
		const root2 = (-b - Math.sqrt(dscrt)) / (2 * a);
		return [root1, root2];
	}
}
function calculateTotalMortgage(percent, contribution, 
  amount, countMonths) {
    if (
      typeof percent !== 'number' ||
      typeof contribution !== 'number' ||
      typeof amount !== 'number' ||
      typeof countMonths !== 'number'
    ) {
      return false;
    }
    percent = percent / 100 / 12;
    const loanBody = amount - contribution;
    const monthlyPayment =
      loanBody *
      (percent +
        percent / (Math.pow(1 + percent, countMonths) - 1));
    const totalAmount = monthlyPayment * countMonths;
  
    return +totalAmount.toFixed(2);
  }