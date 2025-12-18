const safeToggle = document.getElementById("safeMode");

// Store safe mode preference
safeToggle.addEventListener("change", () => {
  localStorage.setItem("safeMode", safeToggle.checked);
});

// Load preference
window.onload = () => {
  const saved = localStorage.getItem("safeMode");
  if (saved === "true") {
    safeToggle.checked = true;
  }
};
