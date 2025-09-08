// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// Popup for Get My Free Quote
const quoteBtn = document.getElementById("quoteBtn");
const saveTimeBtn = document.getElementById("saveTimeBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

quoteBtn.addEventListener("click", () => { popup.style.display = "flex"; });
saveTimeBtn.addEventListener("click", () => { popup.style.display = "flex"; });
closePopup.addEventListener("click", () => { popup.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });
