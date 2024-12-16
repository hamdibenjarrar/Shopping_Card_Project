// Selectors
const totalElement = document.querySelector(".total");
const productList = document.querySelector(".list-products");

// Update total price dynamically
const updateTotal = () => {
  let total = 0;
  document.querySelectorAll(".card-body").forEach((product) => {
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    total += quantity * unitPrice;
  });
  totalElement.textContent = `${total.toFixed(2)} $`;
};

// Add quantity
productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus-circle")) {
    const quantity = e.target.nextElementSibling;
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateTotal();
  }

  // Reduce quantity
  if (e.target.classList.contains("fa-minus-circle")) {
    const quantity = e.target.previousElementSibling;
    if (parseInt(quantity.textContent) > 0) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
      updateTotal();
    }
  }

  // Like item
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("liked");
  }

  // Delete item
  if (e.target.classList.contains("fa-trash-alt")) {
    const product = e.target.closest(".card-body");
    product.remove();
    updateTotal();
  }
});

// Initialize total
updateTotal();

// Select the toggle button
const toggleNightMode = document.querySelector(".toggle-night-mode");

// Check for saved user preference in localStorage
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    toggleNightMode.textContent = "🌜";
  } else {
    toggleNightMode.textContent = "🌞";
  }
});

// Toggle night mode on button click
toggleNightMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
  toggleNightMode.textContent = isDarkMode ? "🌜" : "🌞";
});
