const plusBtns = document.querySelectorAll(".product-plus");
const minusBtns = document.querySelectorAll(".product-minus");
const totalSpentEl = document.querySelector(".remain-money-number");

const totalSumma = 200000;
let totalSpent = 0;

plusBtns.forEach(plusBtn => {
    plusBtn.addEventListener("click", () => {
        const price = +plusBtn.parentElement.previousElementSibling.textContent;
        const divEl = plusBtn.nextElementSibling;
        if (totalSumma >= totalSpent + price) {
            totalSpent += price * 1;
            divEl.textContent++;
            totalSpentEl.textContent = totalSpent;
        } else {
            alert("Pulingiz yetmaydi!");
        }
    });
});

minusBtns.forEach(minusBtn => {
    minusBtn.addEventListener("click", () => {
        const price = minusBtn.parentElement.previousElementSibling.textContent;
        const divEl = minusBtn.previousElementSibling;
        if (divEl.textContent > 0) {
            totalSpent -= price * 1;
            divEl.textContent--;
            totalSpentEl.textContent = totalSpent;
        } else {
            alert("Pulingiz yetmaydi!");
        }
    });
});
