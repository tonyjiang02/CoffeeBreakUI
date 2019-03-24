


function caffeinelevel(currMg, index){
    
    //store mg and timestamp in user
    var timestamp = Date.now(); //time drink was entered


    var millisec = 0;
    if(index == 1){
        millisec = ln(95.177/currMg)/(-3.85*10^-8); //optimal time till sleep
    } else {
        var currTime = Date.now();
        var mgTotal = 0;
        for(var i = 0; i < /*user.orders*/ ; i++){
            var time = currTime - /*users[i].timestamp*/;
            mgTotal += Math.E(-3.85*10^-8*time + ln(/*users[i].mg*/));
        }
        
        millisec = ln(95.177/mgTotal)/(-3.85*10^-8);
    }

    
    //5% significance level
}