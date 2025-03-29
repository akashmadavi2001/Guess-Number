const text = document.getElementById('text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const chance = document.querySelector('.chance');

let randomNo = Math.floor(Math.random() * 100);
let chanceNo = 10;

btn.addEventListener("click", () => {

    chanceNo--;
    chance.innerHTML = "Chance " + chanceNo;

    let userNo = text.value;

    if (chanceNo == 0) {
        btn.innerHTML = "Play again";
        text.disabled = true;
        chance.style.color = result.style.color = "#ff2323";
        result.innerHTML = "You loss the game";
        btn.addEventListener('click', () => {
            btn.innerHTML = "Check";
            window.location.reload();
        })
    } 
    else if (randomNo == userNo) {
        result.innerHTML = "Congratulation Number is " + userNo;
        btn.innerHTML = "Play again";
        text.disabled = true;        
        btn.addEventListener('click', () => {
            btn.innerHTML = "Check";
            window.location.reload();
        })
    }
    else if (randomNo < userNo) {
        result.innerHTML = "Your Number is High";
    }
    else if (randomNo > userNo) {
        result.innerHTML = "Your Number is Low";
    }

    text.value = "";
})