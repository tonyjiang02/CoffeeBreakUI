// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCCTpaTOmOFf-mzP5mWR7OMrw_YrtJedys',
    authDomain: 'coffeebreak-fd59b.firebaseapp.com',
    projectId: 'coffeebreak-fd59b'
});

var db = firebase.firestore();
$(document).ready(function () {
    $("#submitSignup").click(function (e) {
        e.preventDefault();

        signUpForm();
    })
    $("#submitLogin").click(function (e) {
        e.preventDefault();

        loginForm();
    })
})

function hashString(text) {
    var hash = 0;
    if (text.length == 0) {
        return hash;
    }
    for (var i = 0; i < text.length; i++) {
        var char = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function combineHash(email, password) {
    var hashOne = hashString(email);
    var hashTwo = hashString(password);

    return (hashOne + hashTwo) / hashTwo;
}

function verifyUser(email, password, hashInt) {
    return combineHash(email, password) == hashInt;
}

function signUpForm() {
    var username = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var drinks = [];
    var hashedString = combineHash(username, password).toFixed(10);
    var allUsersRef = db.collection('users').doc('allUsers');
    allUsersRef.get().then(function (doc) {
        if (doc.exists) {
            data = doc.data();
            var map = data.UserMap;
            if (!map[username]) {
                map[username] = "Exists"
                var userRef = db.collection('users').doc(hashedString);
                userRef.set({
                    email: username,
                    password: password,
                    beverages: drinks
                }).then(function () {
                    alert("Success! Account created.");
                    window.location.href = "/index.html";
                })
                allUsersRef.update({
                    UserMap: map
                }).then(function () {
                })
            } else {
                alert("Account with that email already exists")
            }
        }
    })



}

function loginForm() {
    var username = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var userRef = db.collection("users").doc(combineHash(username, password).toFixed(10));


    userRef.get().then(function (userDoc) {
        if (userDoc.exists && userDoc.data()['password'] === password) {
            localStorage.setItem("loggedIn", "1");
            localStorage.setItem("user", combineHash(username, password).toFixed(10));

            window.location.href = "/index.html";
        } else {
            alert("Invalid Login Information");
        }
    });
}


