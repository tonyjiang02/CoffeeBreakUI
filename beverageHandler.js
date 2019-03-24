// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCCTpaTOmOFf-mzP5mWR7OMrw_YrtJedys',
    authDomain: 'coffeebreak-fd59b.firebaseapp.com',
    projectId: 'coffeebreak-fd59b'
});


function Beverage(timestamp,mg){
    this.timestamp = timestamp;
    this.mg = mg;
}


var db = firebase.firestore();
$(document).ready(function() {
    $("#plusbutton").click(function(e) {
        e.preventDefault();

        addDrink();
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
    var mg = $('#caffeine-amount').innerHTML;
    console.log(mg);
    var time = Date.now();
    console.log(time);


    var account = db.collection("users").doc(localStorage.getItem());
    var bev = new Beverage(time, mg);
    account.get().then(function(doc){
        if(doc.exists) {
            var data = doc.data();
            var newbeverages = data.beverages;
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

