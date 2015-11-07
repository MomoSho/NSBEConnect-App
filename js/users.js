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
var newActiveUSer = 0;
console.log(activeUsr.username);

var loginbtn = document.getElementById("Login");
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
			/*else {
				alert("Username and/or Password are incorrect. Please try again");
			}*/
		});
		//console.log("user index " + newActiveUSer);
		
	}
	else {
		alert("Username and/or Password are empty. Please fill these in and try again");
	}
}, false);