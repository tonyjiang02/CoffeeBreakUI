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
    $("#welcomeMessage").html("Welcome " + userData.email);
    var sum = calcSum(userData.beverages);
    $("#caffeineAmount").html(sum + " mg");
    setTimeLeft();
    listDrinks();
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
    for (var i = 0; i < bevs.length; i++) {
        var time = Date.now() - bevs[i]["timestamp"];
        var one = (-3.85*Math.pow(10,-8));
        var two = Math.log(bevs[i]['mg']);
        var three = Math.exp(one*time+two);
        mgTotal += three;
    }
    var p1 = Math.log(95.177/mgTotal);
    var p2 = (-3.85*Math.pow(10,-8));
    milisec = p1/p2;
    if(milisec < 0){
        milisec = 0;
    }
    return [mgTotal, milisec];
}
function setTimeLeft() {
    var arr = calcLevel(userData.beverages);
    var time= arr[1] + Date.now();
    var dt = new Date(time);
    $("#sleepTime").html(dt );
    //document.getElementById("sleepTime").innerHTML=arr[1]+" milliseconds";
}
function setLiveCaffeineCounter() {
    if (userData) {
        var arr = calcLevel(userData.beverages);
        $("#currentCaffeine").html(arr[0].toFixed(1)+" mg");
    }else {
    }
}
function listDrinks() {
    console.log("listing Drinks")
    var list = $("#drinksList");
    for (var i =0; i<userData.beverages.length; i++) {
        var name = userData.beverages[i]["name"];
        var mg = userData.beverages[i]["mg"];
        console.log(name);
        console.log(mg);
        list.append("<li>"+name+" : "+mg+" mg caffeine " + "</li>")
    }
}
