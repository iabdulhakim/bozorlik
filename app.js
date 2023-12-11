const h2El = document.querySelector(".product__count");
let count = 1;

btnEl.addEventListener("click", function () {
    count++;
    h2El.textContent = count;
});



