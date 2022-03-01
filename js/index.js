const seeModal = document.getElementById('s-form');
const tryButton = document.getElementById('try-now-btn');
const closePopup = document.getElementById('close-popup-form');
const submitBtn = document.getElementById('sub-btn');
const thankyouMessage = document.getElementById('thankyou-form');
const closeThanku = document.getElementById('close-popup-thankyou');
//enable popup for form submission
tryButton.addEventListener('click', () => {
	seeModal.classList.add('modal-bg-visible');
});
//close popup for form submission
closePopup.addEventListener('click', () => {
	seeModal.classList.remove('modal-bg-visible');
});
//submit form--show acknowledgement
submitBtn.addEventListener('click', () => {
	thankyouMessage.classList.add('modal-bg-visible');
});
//close thank you message popup 
closeThanku.addEventListener('click', () => {
	thankyouMessage.classList.remove('modal-bg-visible');
	seeModal.classList.remove('modal-bg-visible');
});
