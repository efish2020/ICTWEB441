function CalculateV3()
{
   let number1=parseFloat(prompt('Enter number 1 '));
   let number2=parseFloat(prompt('Enter number 2 '));
   let mulResult = number1 * number2;
   let divResult = (number1 / number2).toFixed(2);
  
   let result= `${number1} x ${number2} = ${mulResult}<br> ${number1} ÷ ${number2} = ${divResult}`;
   document.getElementById("info").innerHTML=result;
   
}



