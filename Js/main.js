// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-bs-theme-value]");
  if (!btn) return;
  const value = btn.getAttribute("data-bs-theme-value");
  document.documentElement.setAttribute("data-bs-theme", value);
});

// Factorial calculator (called by onclick="calculatePower()")
function calculatePower() {
  const inputEl = document.getElementById("factorialInput");
  const outEl = document.getElementById("output");
  const raw = inputEl.value.trim();

  if (raw === "") {
    outEl.textContent = "Please enter a number.";
    return;
  }

  const n = Number(raw);
  if (!Number.isInteger(n) || n < 0) {
    outEl.textContent = "Enter a non-negative integer (0, 1, 2, …).";
    return;
  }

  let fact = 1n;
  for (let i = 2n; i <= BigInt(n); i++) fact *= i;

  outEl.textContent = `${n}! = ${fact.toString()}`;
}

// Expose globally (just in case)
window.calculatePower = calculatePower;
