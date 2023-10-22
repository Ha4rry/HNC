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
    let squaredNum = 0;
    function exit(num, isHappyTrueOrFalse) {
        if (isHappyTrueOrFalse) {  
            console.log(triedNums);  
            alert(`${num} is a happy number!`)

        }
        else {
            console.log(triedNums);
            alert(`${num} is a sad number...`)
            
        }
    }
    function doCalc(num) {
        squaredNum = 0;
        for (let i = 0; i < num.length; i++) {
            squaredNum = squaredNum + Math.pow(num.charAt(i), 2);
        }
        if (triedNums.includes(squaredNum)) {
            happy = false;
            exit(number, happy);
        }
        else if (squaredNum == 1) {
            happy = true;
            exit(number, happy);
        }
        else {
            console.log(squaredNum)
            triedNums.push(squaredNum)
            doCalc(String(squaredNum));
        }
        
    
    }
    if (allowCalculate) {
        doCalc(number);
    }
    else if (!allowCalculate) {
        if (rawNumberInput == "") {
            alert('INPUT ERROR: This may be caused by attempting addition or subtraction. Also by entering random characters! e.g. "--", "1-"')   
        }
        else if (isCharIn("e", rawNumberInput, true)) {
            alert("Exponentials are not supported (yet)!");
        }
        else if (isCharIn("+", rawNumberInput, false)) { 
            alert("Addition not supported.");
        }
        else if (Number(rawNumberInput)<0) {
            alert("Negative numbers are not supported!");
        }
        else if (isCharIn("-", rawNumberInput, false)) {
            alert("Subtraction is not supported.");
        }
        else if (isDecimal(Number(rawNumberInput))) {
            alert("Decimals are not supported!");
        }
        else if (isCharIn(".", rawNumberInput, false)) {
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
