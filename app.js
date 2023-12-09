const btnEl = document.querySelector(".product-plus");
let count = 0;

btnEl.addEventListener("click", function () {
    count++;
    btnEl.textContent = count;
});