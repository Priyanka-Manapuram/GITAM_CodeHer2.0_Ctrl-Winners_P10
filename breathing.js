const startBtn = document.getElementById('startBtn');
const countEl = document.getElementById('count');
const circle = document.getElementById('circle');

let timer;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  let seconds = 30;
  countEl.textContent = seconds;

  timer = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(timer);
      countEl.textContent = "Done 🌿";
      startBtn.disabled = false;
      circle.style.transform = 'scale(1)';
    } else {
      countEl.textContent = seconds;
      // optional gentle circle expand/shrink
      circle.style.transform = `scale(${1 + 0.05 * (seconds%2===0 ? 1 : -1)})`;
    }
  }, 1000);
});

function goBack() {
  window.history.back();
}
