
function reg() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var signemail = document.getElementById('signemail').value;
	var signpassword = document.getElementById('signpassword').value;
	var data = {
		fname: fname,
		lname: lname,
		signemail: signemail,
		signpassword: signpassword
	}
	alert('Registered');
	localStorage.setItem('Users', JSON.stringify(data));

}



function get() {
	datum = JSON.parse(localStorage.getItem('Users'));
	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	if (datum.signemail == email && datum.signpassword == pass ) {
		alert('Logged-in successfully');
		 window.open("user-info.html")
	}
	else { alert('Email or Password is wrong.'); }



}



function show() {
	datum = JSON.parse(localStorage.getItem('Users'));
	document.getElementById('name').innerHTML=datum.fname;
	document.getElementById('fname').innerHTML=datum.lname;
	document.getElementById('mail').innerHTML=datum.signemail;
	document.getElementById('pw').innerHTML=datum.signpassword;
	
}