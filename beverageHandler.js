// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCCTpaTOmOFf-mzP5mWR7OMrw_YrtJedys',
    authDomain: 'coffeebreak-fd59b.firebaseapp.com',
    projectId: 'coffeebreak-fd59b'
});


function Beverage(name,timestamp,mg){
    this.timestamp = timestamp;
    this.mg = mg;
    this.name = name;
}


var db = firebase.firestore();
$(document).ready(function() {
    $("#add-beverage").click(function(e) {
        e.preventDefault();
    })
    $("#submitLogin").click(function(e) {
        e.preventDefault();
    })
})
// // // $(plusbutton).pressed({
//         $(bigNumber).value();
//         db firebase storing
// // })
function addDrink() {
    var drinkName = $("#beverageInput").val();
    var mg = $('#caffeine-amount').text();
    console.log(mg);
    console.log(drinkName);
    var time = Date.now();
    console.log(time);
    var userID = localStorage.getItem("user");
    console.log(userID);
    var account = db.collection("users").doc(userID);
    var bev = new Beverage(drinkName,time, parseInt(mg,10));
    account.get().then(function(doc){
        if(doc.exists) {
            var data = doc.data();
            var newbeverages = data.beverages;
            bev = JSON.parse(JSON.stringify(bev));
            newbeverages.push(bev);
            return account.update({
                beverages: newbeverages
            })
            .then(function() {
               console.log("Document successfully updated!");
            })
            .catch(function(error) {
            // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }
    }) 
}

