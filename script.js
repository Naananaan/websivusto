document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
    e.preventDefault();
    const res = document.getElementById("result");
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    if (e.key === "+") {
        res.value = "+";
    } else if (e.key === "-") {
        res.value = "-";
    } else if (e.key === "*") {
        res.value = "*";
    } else if (e.key === "/") {
        res.value = "/";
    }
    if (e.key === ".") {
        res.value = ".";
    }
    if (e.key === "=" || e.key === "Enter") {
        calculate();
    }
    if (e.key === "Backspace") {
        const resultInput = res.value;
        res.value = resultInput.substring(0, res.value.length - 1);
    }
}
function update(value) {
    const res = document.getElementById("result");
    res.value += value;
}
function calculate() {
    const res = document.getElementById("result");
    let memory = res.value;
    try {
        const calculateValue = eval(memory);
        if (isNaN(calculateValue) || !isFinite(calculateValue)) {
            res.value = "Can't divide by 0";
        } else {
            res.value = calculateValue;
        }
    } catch (error) {
        res.value = "Error";
    }
}
function clearResult() {
    const res = document.getElementById("result");
    res.value = "";
}