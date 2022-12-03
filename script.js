console.log("script is loaded jj");
const counder = document.querySelector(".counder");
const ingriment = document.querySelector(".ingriment");
const decrement = document.querySelector(".decrement");

let count = Number(counder.textContent);

ingriment.addEventListener("click", () => {
  count = count + 1;
   counder.textContent = count;
});
decrement.addEventListener('click',() => {
    count = count - 1;
    counder.textContent = count;

});

