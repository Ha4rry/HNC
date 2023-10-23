let version = "2.56";

function isDecimal(num) {
    return (num % 1 != 0);
}

function changeGradient(id, happyOrSadOrInvalid) {

    if (happyOrSadOrInvalid == "happy") {
        document.getElementById(id).style.background="linear-gradient(0.25turn, #04f608, #8ffe8f)";
    }
    if (happyOrSadOrInvalid == "sad") {
        document.getElementById(id).style.background="linear-gradient(0.25turn, #2623cd, #7d7aff)";
    }
    if (happyOrSadOrInvalid == "invalid") {
        document.getElementById(id).style.background="linear-gradient(0.25turn, rgb(255,255,0), rgb(255,0,223)";
    }
    

}
         

function isCharIn(char, str, lowercase) { // use lowercase for only text, use none if checking specifically for symbols
    let isIn = false;
    if (lowercase == true) {
        str = str.toLowerCase()
        char = char.toLowerCase()
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == char) {
                isIn = true;
            }
        } 
        return isIn;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == char) {
                isIn = true;
            }
        } 
        return isIn;
    }
}

function changeTitleForVersion() {
    document.querySelector("#titleText").textContent = `Happy Number Checker v${version}`;
}


function isHappy() {
    let happyOrSadText = document.querySelector("#happyNumText");
    let happy = false;
    let triedNums = [];
    let allowCalculate = true;
    let rawNumberInput = document.getElementById("numberInput").value;  
    let number = 0;

    if (rawNumberInput == "") {
        allowCalculate = false;
    }
    else if (isCharIn("e", rawNumberInput, true)) {
        allowCalculate = false;
    }
    else if (isCharIn("+", rawNumberInput, false)) {
        allowCalculate = false;
    }
    else if (Number(rawNumberInput)<0) {
        allowCalculate = false;
    }
    else if (isCharIn("-", rawNumberInput, false)) {
        allowCalculate = false;
    }
    else if (isDecimal(Number(rawNumberInput))) {
        allowCalculate = false;
    }
    else if (isCharIn(".", rawNumberInput, false)) {
        allowCalculate = false;
    }
    else {
        number = String(rawNumberInput)
    }



    let digits = [];
    let totalOfSquaredDigits = 0;
    function exit(num, isHappyTrueOrFalse) {
        happyOrSadText = document.querySelector("#happyNumText");
        if (isHappyTrueOrFalse) {  
            console.log(triedNums);  
            changeGradient('numberInput', "happy");
            happyOrSadText.textContent = `That's a Happy Number!` 
        }
        else {
            console.log(triedNums);
            changeGradient('numberInput', "sad");
            happyOrSadText.textContent = `That's a Sad Number!`
        }
    }
    function doCalc(num) {
        totalOfSquaredDigits = 0;
        for (let i = 0; i < num.length; i++) {
            totalOfSquaredDigits = totalOfSquaredDigits + Math.pow(num.charAt(i), 2);
        }
        if (triedNums.includes(totalOfSquaredDigits)) {
            happy = false;
            exit(number, happy);
        }
        else if (totalOfSquaredDigits == 1) {
            happy = true;
            exit(number, happy);
        }
        else {
            console.log(totalOfSquaredDigits)
            triedNums.push(totalOfSquaredDigits)
            doCalc(String(totalOfSquaredDigits));
        }
        
    
    }
    if (allowCalculate) {
        doCalc(number);
    }
    else if (!allowCalculate) {
        if (rawNumberInput == "") {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Please enter a number.` 
            // alert('INPUT ERROR: This may be caused by leaving the textbox blank, attempting addition or subtraction. Also by entering random characters! e.g. "--", "1-"')   
        }
        else if (isCharIn("e", rawNumberInput, true)) {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Exponentials aren't supported!`
        }
        else if (isCharIn("+", rawNumberInput, false)) { 
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Addition isn't supported!`
        }
        else if (Number(rawNumberInput)<0) {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Negative numbers aren't supported!`
        }
        else if (isCharIn("-", rawNumberInput, false)) {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Subtraction isn't supported!`
        }
        else if (isDecimal(Number(rawNumberInput))) {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Decimals aren't supported!`
        }
        else if (isCharIn(".", rawNumberInput, false)) {
            changeGradient('numberInput', "invalid");
            happyOrSadText.textContent = `Invalid character entered: "."`
        }
        }
        else {
            alert("ERROR: INVALID INPUT ERROR");
        }
    
};


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}

let btn = document.getElementById('isHappyButton');
   
document.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter') {
    isHappy();
  }
    
});





