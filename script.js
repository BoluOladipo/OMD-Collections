document.getElementById('openLookbook').addEventListener('click', () => {
  alert("Lookbook coming next!");
});


// Lookbook modal control
document.getElementById("openLookbook").addEventListener("click", () => {
  document.getElementById("lookbookModal").classList.remove("hidden");
});

document.getElementById("closeLookbook").addEventListener("click", () => {
  document.getElementById("lookbookModal").classList.add("hidden");
});

// Animate numbers
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if(current < target) {
      counter.innerText = $`{Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});