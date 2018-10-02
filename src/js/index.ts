function calculate() : void {
    let n1 : number = parseInt((<HTMLInputElement> document.getElementById("n1")).value);
    let n2 : number = parseInt((<HTMLInputElement> document.getElementById("n2")).value);

    console.log("hej");

    let calcType : string = (<HTMLInputElement> this).value;
    let result : number;
    let cType : string;

    switch (calcType) {
        case "+":
            result = n1 + n2;
            cType = "addition";
            break;
        case "-":
            result = n1 - n2;
            cType = "subtraction";
            break;
        case "*":
            result = n1 * n2;
            cType = "multiplication";
            break;
        case "/":
            result = n1 / n2;
            cType = "division";
            break;
    
        default:
            console.log("error use (+, -, *, /)");
            break;
    }

    document.getElementById("result-span").innerText = cType + ": " + String(result);
}

let mathBtns = document.getElementsByClassName("mathBtns");
for (let i = 0; i < mathBtns.length; i++) {
    let el = mathBtns[i];
    el.addEventListener("click", calculate);
}