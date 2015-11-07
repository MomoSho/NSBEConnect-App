var users = [
	
		{"username": "NoOne",
			"password": "",
			"location": ""
		},
		{"username": "MoSho",
			"password": "helloworld",
			"location": "20,30"
		},
		{"username": "JoYoung",
			"password": "hiworld",
			"location": "25,32"
		}

];

var activeUsr = users[0];

var loginbtn = document.getElementById("Login");
/*if(loginbtn == null) {
	alert("null");
}*/
loginbtn.addEventListener("click", function(event) {
	var usrbtn = document.getElementById("Username");
	var passbtn = document.getElementById("Password");

	activeUsr = users[2];

	alert("CLICK!");
}, false);