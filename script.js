document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
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
    } else if (e.key === "Backspace") {
        deleteCharacter();
    }
}
function backSpace() {
    const res = document.getElementById("result");
    const currentValue = res.value;
    res.value = currentValue.substring(0, currentValue.length - 1);
}
function update(value) {
    const res = document.getElementById("result");
    res.value += value;
}

function calculate() {
    const res = document.getElementById("result");
    const memory = res.value;
    try {
        const calculateValue = eval(memory);
        if (isNaN(calculateValue) || !isFinite(calculateValue)) {
            res.value = "Ei voida jakaa";
        } else {
            res.value = calculateValue;
        }
    } catch (error) {
        res.value = "Virhe";
    }
}

function deleteCharacter() {
    const res = document.getElementById("result");
    const currentValue = res.value;
    res.value = currentValue.substring(0, currentValue.length - 1);
}
function clearResult() {
    const res = document.getElementById("result");
    res.value = "";
}

function saveResult(category) {
    const res = document.getElementById("result").value;
    if (res !== "") {
        let element;
        if (category === "expenses") {
            element = document.getElementById("expenses");
            element.textContent = `Menot: ${res}`;
        } else if (category === "income") {
            element = document.getElementById("income");
            element.textContent = `Tulot: ${res}`;
        } else if (category === "savings") {
            const savingsGoal = parseFloat(res);
            element = document.getElementById("savings");
            element.textContent = `Säästötavoite: ${savingsGoal}`;
            
            // Päivitä säästösuositus
            updateSavingsRecommendation();
            
            // Päivitä kuukausittainen säästötavoite
            updateMonthlySavingsGoal(savingsGoal);
        }
        
        // Tyhjennä result-kenttä
        document.getElementById("result").value = "";

        // Laske jäljellä oleva raha ja päivitä se
        updateRemainingMoney();

        // Päivitä säästösuositus
        updateSavingsRecommendation();
    }
}



function updateRemainingMoney() {
    const income = parseFloat(document.getElementById("income").textContent.split(": ")[1]);
    const expenses = parseFloat(document.getElementById("expenses").textContent.split(": ")[1]);
    const remainingMoney = income - expenses;
    document.getElementById("remaining-money").textContent = `Jäljellä oleva raha: ${remainingMoney}`;
}

function updateSavingsRecommendation() {
    const remainingMoney = parseFloat(document.getElementById("remaining-money").textContent.split(": ")[1]);
    const savingsRecommendation = remainingMoney * 0.2;
    document.getElementById("savings-recommendation").textContent = `Säästösuositus: ${savingsRecommendation.toFixed(2)}`;
}

function updateMonthlySavingsGoal(savingsGoal) {
    const monthlySavingsGoal = savingsGoal / 12;
    document.getElementById("monthSavings").textContent = `Kuukaudessa säästöön laitettava, \n että tavoite täyttyy vuoden aikana: ${monthlySavingsGoal.toFixed(2)}`;

}
