function isDecimal(num) {
    return (num % 1 != 0);
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

let prevNumber = 0;


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
            happyOrSadText.textContent = `That's a Happy Number!` 
            prevNumber = num;
        }
        else {
            console.log(triedNums);
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
            happyOrSadText.textContent = `Please enter a number.` 
            // alert('INPUT ERROR: This may be caused by leaving the textbox blank, attempting addition or subtraction. Also by entering random characters! e.g. "--", "1-"')   
        }
        else if (isCharIn("e", rawNumberInput, true)) {
            happyOrSadText.textContent = `Exponentials aren't supported!`
        }
        else if (isCharIn("+", rawNumberInput, false)) { 
            happyOrSadText.textContent = `Addition isn't supported!`
        }
        else if (Number(rawNumberInput)<0) {
            happyOrSadText.textContent = `Negative numbers aren't supported!`
        }
        else if (isCharIn("-", rawNumberInput, false)) {
            happyOrSadText.textContent = `Subtraction isn't supported!`
        }
        else if (isDecimal(Number(rawNumberInput))) {
            happyOrSadText.textContent = `Decimals aren't supported!`
        }
        else if (isCharIn(".", rawNumberInput, false)) {
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
