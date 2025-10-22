// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (reads data-bs-theme-value from buttons)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-bs-theme-value]");
  if (!btn) return;
  const value = btn.getAttribute("data-bs-theme-value");
  document.documentElement.setAttribute("data-bs-theme", value);
});

// Factorial calculator (assignment calls onclick='calculatePower()')
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

  // Use BigInt to support bigger values safely
  let fact = 1n;
  for (let i = 2n; i <= BigInt(n); i++) fact *= i;

  outEl.textContent = `${n}! = ${fact.toString()}`;
}

// Optional: Enter key triggers calculation
document.getElementById("factorialInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculatePower();
});
