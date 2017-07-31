// Initialize Firebase
// var config = {
// apiKey: "AIzaSyBhFZ7stYNtMWfT6a6TPRYzQwpPFb2xzkQ",
// authDomain: "chat-app-d18ea.firebaseapp.com",
// databaseURL: "https://chat-app-d18ea.firebaseio.com",
// projectId: "chat-app-d18ea",
// storageBucket: "chat-app-d18ea.appspot.com",
// messagingSenderId: "585954393928"
// };

// firebase.initializeApp(config);
var myDatabase = new Firebase("https://chat-app-d18ea.firebaseio.com");

var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener("click", function() {
	var msgUser = usernameInput.value;
	var msgText = textInput.value;

	myDatabase.push{username: msgUser, text: msgText};
	textInput.value = "";	
});


