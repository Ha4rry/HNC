function isDecimal(num) {
    return (num % 1 != 0);
}

function isHappy() {
    let happy = false;
    let triedNums = [];
    let allowCalculate = true;
    let rawNumberInput = document.getElementById("numberInput").value;  
    let number = 0;
    if (((String(rawNumberInput)).toLowerCase()).includes("e")) {
        allowCalculate = false;
    }
    if (parseFloat(rawNumberInput)<0) {
        allowCalculate = false;
    }

    if (isDecimal(parseFloat(rawNumberInput))) {
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
        if (((String(rawNumberInput)).toLowerCase()).includes("e")) {
            alert("Exponentials are not supported (yet)!");
        }
        else if (Number(rawNumberInput)<0) {
            alert("Negative numbers are not supported!");
        }
        else if (isDecimal(Number(rawNumberInput))) {
            alert("Decimals are not supported!");
        }
    }
    else {
        alert("ERROR: INVALID INPUT ERROR")
    }
    
};

let btn = document.getElementById('isHappyButton');
   
document.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter') {
    isHappy();
  }
    
});
