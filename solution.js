


const wagesPerHour = 10;

function calculateYearlyGrossIncome(wagesPerHour) {
  const hoursInWeek = 40;
  const weeksInYear = 48;

  return hoursInWeek * wagesPerHour * weeksInYear;
}
function calculateNIContribution(yearlyGrossIncome) {
  const niPercentage = 7 / 100;
  return yearlyGrossIncome * niPercentage;
}
function calculateTax(yearlyGrossIncomeAfterNI) {
  const lowerIncomeThreshold = 12000;
  const higherIncomeThreshold = 43000;
  const standardIncomeTaxPercentage = 10 / 100;
  const higherIncomeTaxPercentage = 40 / 100;
  if (yearlyGrossIncomeAfterNI < lowerIncomeThreshold) {
    return 0;
  } else if (yearlyGrossIncomeAfterNI < higherIncomeThreshold) {
    return yearlyGrossIncomeAfterNI * standardIncomeTaxPercentage;
  } else {
    return yearlyGrossIncomeAfterNI * higherIncomeTaxPercentage;
  }
}
function calculateMonhtlyNetIncome(yearlyNetIncome) {
  const monthsInYear = 12;
  return yearlyGrossIncome / monthsInYear;
}

const yearlyGrossIncome = calculateYearlyGrossIncome(wagesPerHour);
console.log('Yearly Gross INCOME : ' + yearlyGrossIncome);

const niContribution = calculateNIContribution(yearlyGrossIncome);
console.log('NI Contribution : ' + niContribution);

const yearlyGrossIncomeAfterNI = yearlyGrossIncome - niContribution;
console.log('Yearly Gross Income After NI : ' + yearlyGrossIncomeAfterNI);

const tax = calculateTax(yearlyGrossIncomeAfterNI);
console.log('Tax :' + tax);

const net = yearlyGrossIncomeAfterNI - tax;
console.log('Net :' + net);

const monhtlyNetIncome = calculateMonhtlyNetIncome(net);
console.log('Monthly Net INCOME :' + monhtlyNetIncome);


