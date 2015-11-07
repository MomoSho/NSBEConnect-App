var users = [
	
		{"username": "NoOne",
			"password": "",
			"lat": "",
			"lng": "",
			"events": []
		},
		{"username": "MoSho",
			"password": "helloworld",
			"lat": "20",
			"lng": "30",
			"events": ["Region III Fall Conferenece (FRC)"]
		},
		{"username": "JoYoung",
			"password": "hiworld",
			"lat": "25",
			"lng": "32",
			"events": ["NSBE's 42nd Annual Convention",
						"Regional Leadership Conference"
			]
		}

];

var activeUsr = users[0];
var newActiveUSer = 0;
console.log(activeUsr.username);


/*** User Login ***/
/*var loginbtn = document.getElementById("Login");
loginbtn.addEventListener("click", function(event) {
	var usrbtn = document.getElementById("Username").value;
	var passbtn = document.getElementById("Password").value;

	console.log("user " + usrbtn);

	if(usrbtn !== "" && passbtn !== "") {
		// Verify user entered correct password
		users.forEach( function(item, index, array) {
			if(item.username === usrbtn && item.password === passbtn){
				newActiveUSer = index;
				activeUsr = users[newActiveUSer];

				alert(activeUsr.username + " has successfully logged in!");
			}
			if(index === users.length - 1 && newActiveUSer === 0){
				alert("Log in unsuccessful. Please try again");
			}
		});		
	}
	else {
		alert("Username and/or Password are empty. Please fill these in and try again");
	}
}, false);*/

/*** User Register for Event ***/
var frcbtn = document.getElementById("FRCR3");
frcbtn.addEventListener("click", function(event) {
	if(newActiveUSer === 0) {
		alert("Please log in to register for this event");
	}
	else {
		activeUsr.events.push("Region III Fall Conferenece (FRC)");
	}
});
