var db = firebase.firestore();
var userData;
window.setInterval(function(){
    setLiveCaffeineCounter();
  }, 1000);
$(document).ready(function () {
    var userID = localStorage.getItem("user");
    var account = db.collection("users").doc(userID);
    account.get().then(function (doc) {
        if (doc.exists) {
            userData = doc.data();
        }
    }).then(function () {
        init();
    })
});
function init() {
    console.log("calling function")
    console.log(userData)
    $("#welcomeMessage").html("Welcome " + userData.email);
    var sum = calcSum(userData.beverages);
    $("#caffeineAmount").html(sum + " mg");
    calcLevel(userData.beverages);
    setTimeLeft();
}
function calcSum(bevs) {
    var output = 0;
    for (var i = 0; i < bevs.length; i++) {
        output += parseInt(bevs[i].mg);
    }
    return output;
}
function calcLevel(bevs) {
    var mgTotal =0;
    var milisec;
    console.log(bevs);
    for (var i = 0; i < bevs.length; i++) {
        var time = Date.now() - bevs[i]["timestamp"];
        var one = (-3.85*Math.pow(10,-8));
        var two = Math.log(bevs[i]['mg']);
        var three = Math.exp(one*time+two);
        mgTotal += three;
    }
    console.log(mgTotal);
    var p1 = Math.log(95.177/mgTotal);
    var p2 = (-3.85*Math.pow(10,-8));
    console.log(p1);
    console.log(p2);
    milisec = p1/p2;
    console.log(milisec);
    if(milisec < 0){
        milisec = 0;
    }
    console.log(milisec);
    return [mgTotal, milisec];
}
function setTimeLeft() {
    var arr = calcLevel(userData.beverages);
    console.log(arr[1]);
    var time= arr[1] + Date.now();
    var dt = new Date(time);
    $("#sleepTime").html(dt );
    //document.getElementById("sleepTime").innerHTML=arr[1]+" milliseconds";
}
function setLiveCaffeineCounter() {
    if (userData) {
        var arr = calcLevel(userData.beverages);
        $("#currentCaffeine").html(arr[0].toFixed(1));
        console.log("updating");
    }else {
        console.log("userdata no existe")
    }
}
