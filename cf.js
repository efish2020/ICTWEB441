const btnElemnt = document.getElementById("convert");
const btnFtoCElemnt = document.getElementById("btnFtoC");
const strElemnt = document.getElementById("strTxt");
const result = document.getElementById("result");


// Define a function to convert Celsius to Fahrenheit
function cToF(celsius) {
    // Store the input Celsius temperature in a variable
    var cTemp = celsius;
  
    // Calculate the equivalent Fahrenheit temperature
    var cToFahr = cTemp * 9 / 5 + 32;
  
    // Create a message string describing the conversion result
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  
    // Log the message to the console
    return message;
    console.log(message);
  }
  
  // Define a function to convert Fahrenheit to Celsius
  function fToC(fahrenheit) {
    // Store the input Fahrenheit temperature in a variable
    var fTemp = fahrenheit;
  
    // Calculate the equivalent Celsius temperature
    var fToCel = (fTemp - 32) * 5 / 9;
  
    // Create a message string describing the conversion result
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  
    // Log the message to the console
    return message;
    console.log(message);
  }

  function cToFDemo() {
    let strInfo=strElemnt.value;
    //alert(strInfo);
    strInfo = cToF(strInfo);
    //alert(strInfo);
  
    result.innerText = `C to f ${strInfo}`; 
  }
  
  function fTocDemo() {
    let strInfo=strElemnt.value;
    //alert(strInfo);
    strInfo = fToC(strInfo);
    //alert(strInfo);
  
    result.innerText = `f to c ${strInfo}`; 
  }
  
  btnElemnt.addEventListener("click", cToFDemo);
  btnFtoCElemnt.addEventListener("click", fTocDemo);