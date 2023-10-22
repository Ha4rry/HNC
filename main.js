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
            happyOrSadText.textContent = `Please try again!` 
            alert('INPUT ERROR: This may be caused by leaving the textbox blank, attempting addition or subtraction. Also by entering random characters! e.g. "--", "1-"')   
        }
        else if (isCharIn("e", rawNumberInput, true)) {
            happyOrSadText.textContent = `Please try again!`
            alert("Exponentials are not supported (yet)!");
        }
        else if (isCharIn("+", rawNumberInput, false)) { 
            happyOrSadText.textContent = `Please try again!`
            alert("Addition not supported.");
        }
        else if (Number(rawNumberInput)<0) {
            happyOrSadText.textContent = `Please try again!`
            alert("Negative numbers are not supported!");
        }
        else if (isCharIn("-", rawNumberInput, false)) {
            happyOrSadText.textContent = `Please try again!`
            alert("Subtraction is not supported.");
        }
        else if (isDecimal(Number(rawNumberInput))) {
            happyOrSadText.textContent = `Please try again!`
            alert("Decimals are not supported!");
        }
        else if (isCharIn(".", rawNumberInput, false)) {
            happyOrSadText.textContent = `Please try again!`
            alert('Invalid character entered: ".", Decimals are not supported, Please try again.');
        }
        }
        else {
            alert("ERROR: INVALID INPUT ERROR");
        }
    
};

let btn = document.getElementById('isHappyButton');
   
document.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter') {
    isHappy();
  }
    
});
