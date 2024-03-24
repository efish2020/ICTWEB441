const btnElemnt = document.getElementById("convert");
const strElemnt = document.getElementById("strTxt");
const result = document.getElementById("result");


function reverseAString() {
  let strInfo=strElemnt.value;
  //alert(strInfo);
  strInfo = strInfo.split("").reverse().join("");
  //alert(strInfo);

  result.innerText = `The reverse of ${strInfo} is ${strInfo}`; 
}


btnElemnt.addEventListener("click", reverseAString);
