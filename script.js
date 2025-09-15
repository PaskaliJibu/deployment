/* ============================= */
/* Part 2: JavaScript Functions */
/* ============================= */

// Global variable to demonstrate scope
let globalCount = 0;

// Function with parameter & return value
function calculateDouble(num) {
  return num * 2;
}

// Function demonstrating local vs global scope
function incrementGlobal() {
  let localVar = "I'm local!";
  globalCount++;
  console.log(localVar, "Global Count:", globalCount);
}

// Function to toggle animation on a given element (reusable)
function toggleAnimation(element) {
  if (!element) return "No element found!";
  element.classList.toggle("animate");
  return element.classList.contains("animate") ? "Animation ON" : "Animation OFF";
}

/* ============================= */
/* Part 3: Combine CSS + JS */
/* ============================= */

// Box animation
const box = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  const result = toggleAnimation(box);
  console.log(result);
  incrementGlobal(); // Demonstrates local/global
  console.log("Double of 5 is:", calculateDouble(5)); // Example return value
});

// Modal logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Open modal
openModal.onclick = () => modal.classList.add("show");

// Close modal
closeModal.onclick = () => modal.classList.remove("show");

// Close modal if clicking outside content
window.onclick = (event) => {
  if (event.target === modal) modal.classList.remove("show");
};

