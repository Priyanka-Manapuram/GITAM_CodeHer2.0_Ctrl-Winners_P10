const cards = document.querySelectorAll(".card");
const comfortText = document.getElementById("comfort-text");

const messages = {
  stressed: "It’s okay to feel like it’s all too much. Take a breath.",
  empty: "Feeling empty can be confusing. You don’t need answers right now.",
  sad: "It’s okay to sit with sadness. You’re not alone.",
  angry: "Anger often protects hurt. Pause and breathe.",
  okay: "It’s okay to simply be okay today.",
  peaceful: "Hold onto this calm moment gently."
};


cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const mood = card.getAttribute("data-mood");
    comfortText.innerText = messages[mood];
  });
});

function help(card) {
    const mood = card.getAttribute("data-mood");
    localStorage.setItem("selectedMood", mood);

    // show comfort message
    comfortText.innerText = messages[mood];

    // optional: visual feedback
    card.classList.add("active");

    // delay navigation by 5 seconds
    setTimeout(function () {
        window.location.href = "help.html";
    }, 3500); // 5 seconds
}

function callHelp() {
  alert("Dial for 91-22-27546669 immediate support.");
}

function textHelp() {
  alert("Call Tele MANAS to 14416 for emotional support.");
}

function ground() {
  window.location.href = 'breathing.html';
}

function goBack() {
  window.history.back();
}

// Select the card
const breatheCard = document.getElementById('breatheCard');

// Add click listener
breatheCard.addEventListener('click', () => {
  // Optional: show a small message for 5 seconds before navigation
  breatheCard.querySelector('span').textContent = "Get ready...";
  setTimeout(() => {
    window.location.href = 'breathing.html';
  }, 100); 
});

journal.addEventListener('click', () => {
  // Optional: show a small message for 5 seconds before navigation
  breatheCard.querySelector('span').textContent = "Get ready...";
  setTimeout(() => {
    window.location.href = 'reflect.html';
  }, 100); 
});

heavy.addEventListener('click', () => {
  // Optional: show a small message for 5 seconds before navigation
  breatheCard.querySelector('span').textContent = "Get ready...";
  setTimeout(() => {
    window.location.href = 'heavy.html';
  }, 100); 
});

reminder.addEventListener('click', () => {
  // Optional: show a small message for 5 seconds before navigation
  breatheCard.querySelector('span').textContent = "Get ready...";
  setTimeout(() => {
    window.location.href = 'reminder.html';
  }, 100); 
});