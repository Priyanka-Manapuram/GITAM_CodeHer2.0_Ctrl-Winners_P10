// Back button
function goBack() {
  window.history.back();
}

// Continue button functionality
const continueBtn = document.getElementById('continueBtn');
const journal = document.getElementById('journal');

continueBtn.addEventListener('click', () => {
  const text = journal.value.trim();
  if(text) {
    alert("Your reflection is noted 🌿"); // Placeholder, you can save to localStorage or backend
    journal.value = '';
  } else {
    alert("Take your time. Write whatever comes to mind.");
  }
});

// Optional: Safe mode toggle
const safeToggle = document.getElementById('safeToggle');
safeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    document.body.style.background = "#fffde7"; // lighter background
  } else {
    document.body.style.background = "#e8f0fa";
  }
});
