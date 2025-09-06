// Popup
const saveBtn = document.getElementById('saveTimeBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

saveBtn.onclick = () => popup.style.display = 'block';
closeBtn.onclick = () => popup.style.display = 'none';
window.onclick = (e) => { if (e.target === popup) popup.style.display = 'none'; };

// Auto-load partner logos
const partnerDiv = document.getElementById('partner-logos');
const logos = [
  'paylogo1.jpg','paylogo2.jpg','paylogo3.jpg'
]; // add more names as needed
logos.forEach(file => {
  const img = document.createElement('img');
  img.src = `assets/${file}`;
  img.alt = "Payment Logo";
  partnerDiv.appendChild(img);
});
