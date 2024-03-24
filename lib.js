//const btnElemnt = document.getElementById("calculate");
//const yearInput = document.getElementById("year");




/*function checkLeapYear(year) {
    // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


function calculateLeapYear() {
  const leapYear = checkLeapYear(Number(yearInput.value));
  let leapInfo=leapYear ? " is " : " is not";
  let info =yearInput.value + leapInfo  + " leap year.";
  result.innerText = info;
}
*/

const result = document.getElementById("result");
const penEle=document.getElementById("pens");
const btnBestPrice = document.getElementById("bestPens");

function bestPrice()
{
  const OnePen=4;
  const ThreePens=10;
  const FivePens=15;

  let totalPens=Number(penEle.value);

  let total=0;
  let numOfFive = Math.floor(totalPens/5);
  let fiveRem = totalPens % 5;

  let numOfThree = Math.floor(fiveRem/3);
  let threeRem = fiveRem % 3;

  total = numOfFive * FivePens + numOfThree * ThreePens+ threeRem * OnePen;
  
  result.innerHTML=total;

}

//btnElemnt.addEventListener("click", calculateLeapYear);
btnBestPrice.addEventListener("click", bestPrice);
