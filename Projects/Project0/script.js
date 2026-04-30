function calculate(operator){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    if(operator === "+") result = a + b;
    if(operator === "-") result = a - b;
    if(operator === "*") result = a * b;

    if(operator === "/"){
        if(b == 0){
            document.getElementById("result").innerHTML = "Cannot divide by zero";
            return;
        }
        result = a / b;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}