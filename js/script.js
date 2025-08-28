// Select elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalPriceEl = document.querySelector(".total");

// Calculate total price, skip cards missing data
function calculateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const priceEl = card.querySelector(".unit-price");
    const qtyEl = card.querySelector(".quantity");
    if (!priceEl || !qtyEl) return; // skip incomplete cards
    const unitPrice = Number(priceEl.textContent.replace("$", "").trim());
    const quantity = Number(qtyEl.textContent.trim());
    if (Number.isNaN(unitPrice) || Number.isNaN(quantity)) return;
    total += unitPrice * quantity;
  });
  totalPriceEl.textContent = total + " $";
}

// Increase quantity
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantityEl = this.parentElement.querySelector(".quantity");
    quantityEl.textContent = Number(quantityEl.textContent) + 1;
    calculateTotal();
  });
});

// Decrease quantity
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantityEl = this.parentElement.querySelector(".quantity"); // span showing quantity
      const current = Number(quantityEl.textContent);
    if (current > 0) {
      quantityEl.textContent = current - 1;
      calculateTotal();
    }
  });
});

// Delete product. Remove the whole product wrapper so price reads update cleanly
deleteBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    if (!card) return;
    // outer wrapper that holds the whole product in the .list-products
    const productWrapper = card.closest(".card-body");
    if (productWrapper) {
      productWrapper.remove();
    } else {
      card.remove();
    }
    calculateTotal();
  });
});

// Toggle like using CSS class
heartBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});

// initial total
calculateTotal();
