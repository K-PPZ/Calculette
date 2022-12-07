let title = document.getElementById("title");
let num = document.getElementById("ecran_num");
let result = document.getElementById("ecran_result");

let numbers = document.getElementsByClassName("numbers");
let egale = document.getElementById("egale");
let ac = document.getElementById("reset");
let on = document.getElementById("on");

let op = document.getElementsByClassName("op");
let plus = document.getElementById("plus");
let fois = document.getElementById("fois");
let moins = document.getElementById("moins");
let diviser = document.getElementById("diviser");

let interv = true;

on.addEventListener("click", () => {
    let temps = setInterval(() => {
        if (interv) {
            title.classList.remove("hidden");
            title.classList.add("visible");
            interv = false;
        } else {
            title.classList.remove("visible");
            title.classList.add("hidden");
            interv = true;
        }
    }, 700);

    setInterval(() => {
        clearInterval(temps);
        title.classList.remove("visible");
        title.classList.add("hidden");
    }, 3000);

    ac.addEventListener("click", () => {
        num.innerText = "";
        result.innerText = "";
    });

    let text = "";
    
    let t = [];
    let k = 0;
    let m = k;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            num.innerText += numbers[i].textContent;
            text += numbers[i].textContent;
            t[k] = parseInt(text);
        });
    }
    
    for (let j = 0; j < op.length; j++) {
        op[j].addEventListener("click", () => {
            text = "";
            num.innerText += op[j].textContent;
            k ++;
            t[k ++] = op[j].textContent;
        });
    }

    let resultat;
    let calcule;
    egale.addEventListener("click", () => {
    
        for (let y = 0; y < t.length; y++) {
            if (t[y] == "+") {
                resultat = t[y + 1] = t[y - 1] + t[y + 1];
            }

            if (t[y] == "*") {
                console.log(t[y - 1] * t[y + 1]);
                resultat = t[y + 1] = t[y - 1] * t[y + 1];
            }

            if (t[y] == "/") {
                resultat = t[y + 1] = t[y - 1] / t[y + 1];
            }

            if (t[y] == "-") {
                resultat = t[y + 1] = t[y - 1] - t[y + 1];
            }
        }
        console.log(t);
        result.innerText = resultat;
    });

});