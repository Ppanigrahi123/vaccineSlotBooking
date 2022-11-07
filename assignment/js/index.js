
let form = document.querySelector('form');
form.addEventListener('submit',submitData)
function submitData(event) {
	event.preventDefault();
	let user = {
		name : form.name.value,
		email : form.email.value,
		age : form.age.value,
		phone_number : form.phone_number.value,
		date : form.date.value,
		adhaar_number : form.adhaar_number.value,
		address : form.address.value,

	}
	let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
	localStorage.setItem('users',JSON.stringify([...users,user]));
	alert("User data submitted :)");
	form.name.value = "";
	form.email.value = "";
	form.age.value = "";
	form.phone_number.value = "";
	form.date.value = "";
	form.adhaar_number.value = "";
	form.address.value = "";
}