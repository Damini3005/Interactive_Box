const radios = document.querySelectorAll('input[name="unit"]');
const total = document.getElementById("total");
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    total.textContent = `$${radio.value}.00 USD`;
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    cards.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
    const selectedPrice = this.querySelector(".price strong").innerText;
    document.getElementById("total").innerText = selectedPrice;
  });
});
