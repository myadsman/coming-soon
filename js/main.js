var subscribeBtn = document.getElementById("subscribeBtn");
var subscribeForm = document.getElementById("subscribe-form");
var email = document.getElementById("your-email");
var validationMessage = document.getElementById("validationMessage");

subscribeBtn.onclick = subscribe;
subscribeForm.onsubmit = function(e) {
	e.preventDefault();
	subscribe();
}

function subscribe()  {
	subscribeBtn.innerHTML = '<span class="fa fa-refresh fa-spin"></span>';

	// var status = {
	// 	"error": "This is not a valid email",
	// 	"code": 200
	// };
	var status = "success";
	
	var isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (email.value.length == 0) {
		validationMessage.style = 'color: #fa3310;';
		validationMessage.innerText = "Please enter an email😒";
		subscribeBtn.innerHTML = '<span class="fa fa-times"></span> try again';
	} else if (!isEmail.test(email.value)) {
		validationMessage.style = 'color: #fa3310;';
		validationMessage.innerText = "Please enter a real email😵";
		subscribeBtn.innerHTML = '<span class="fa fa-times"></span> try again';
	} else {
		// just to make it a bit slower
		setTimeout(function () {
			if (status === "success") {
				validationMessage.style = 'color: #10fa33;';
				validationMessage.innerText = "Great! You'll hear from us soon😎";
				subscribeBtn.innerHTML = '<span class="fa fa-check"></span> success';
			} else {
				validationMessage.style = 'color: #fa3310;';
				validationMessage.innerText = status.error;
				subscribeBtn.innerHTML = '<span class="fa fa-times"></span> try again';
			}
		}, 2000);
	}
}