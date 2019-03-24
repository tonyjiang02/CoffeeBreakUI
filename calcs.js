// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCCTpaTOmOFf-mzP5mWR7OMrw_YrtJedys',
    authDomain: 'coffeebreak-fd59b.firebaseapp.com',
    projectId: 'coffeebreak-fd59b'
});


function caffeinelevel(){
    
    //store mg and timestamp in user
    var timestamp = Date.now(); //time drink was entered
    var account = db.collection("users").doc(localStorage.getItem("user"));

    var currTime = Date.now();
    var mgTotal = 0;
    var bevs;
    account.get().then(function(doc) {
        if (doc.exists) {
            var data = doc.data();
            bevs = data.beverages;
        }
    });
    for(var i = 0; i < bevs.length; i++){
        var time = currTime - bevs[i].timestamp;
        mgTotal += Math.E(-3.85*10^-8*time + ln(bevs[i].mg));
    }
     
    millisec = ln(95.177/mgTotal)/(-3.85*10^-8);
     
    //5% significance level
    //display data on chart
}
function calcLevel(bevs) {
    for(var i = 0; i < bevs.length; i++){
        var time = currTime - bevs[i].timestamp;
        mgTotal += Math.E(-3.85*10^-8*time + ln(bevs[i].mg));
    }
     
    millisec = ln(95.177/mgTotal)/(-3.85*10^-8);
}
function calcSum(bevs) {
    var output = 0;
    for(var i = 0; i < bevs.length; i++){
        output += parseInt(bevs[i].mg);
    }
    return output;
}
