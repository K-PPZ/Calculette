let num = document.getElementById("ecran_num");
let result = document.getElementById("ecran_result");

let numbers = document.getElementsByClassName("numbers");
let egale = document.getElementById("egale");
let ac = document.getElementById("reset");

let op = document.getElementsByClassName("op");
let plus = document.getElementById("plus");
let fois = document.getElementById("fois");
let moins = document.getElementById("moins");
let diviser = document.getElementById("diviser");


ac.addEventListener("click", () => {
    num.innerText = "";
    result.innerText = "";
});


let t = [];
let y = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        num.innerText += numbers[i].textContent;
        t[y] = parseInt(numbers[i].textContent);
        console.log(t);
    });
}

function operations (signes) {
    let resultat = 0;
    for (let k = 0; k < t.length; k++) {
        // if (signes == "+") {
        //     resultat += t[k];
        // }
        resultat += t[k];

        // if (signes == "-") {
        //     resultat -= t[k];
        // }

        // if (signes == "*") {
        //     resultat *= t[k];
        // }

        // if (signes == "/") {
        //     resultat /= t[k];
        // }
    }
    return resultat;
}

plus.addEventListener("click", () => {
    operations("+");
});

moins.addEventListener("click", () => {
    operations("-");
});

fois.addEventListener("click", () => {
    operations("*");
});

diviser.addEventListener("click", () => {
    operations("/");
});



egale.addEventListener("click", () => {
    result.innerText += operations();
    console.log(operations());
});

for (let j = 0; j < op.length; j++) {
    op[j].addEventListener("click", () => {
        num.innerText += op[j].textContent;
        y ++;
    });
}

console.log("tableau " + t);