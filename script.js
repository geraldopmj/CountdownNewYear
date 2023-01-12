let newYear = new Date('2024-01-01');

function addYears(date) {//will add one year to var newYear when called
    date.setFullYear(date.getFullYear() + 1);
  };

function getTimeRemaining(endTime){
    let t= Date.parse(endTime) - Date.parse(new Date());//sets the eventTime minus actual date
    let seconds= Math.floor((t/1000)%60);//math.floor returns the largest integer less or equal to a given number
    let minutes= Math.floor((t/1000/60)%60);
    let hours= Math.floor((t/(1000*60*60))%24);
    let days= Math.floor(t/(1000*60*60*24));
    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(clockId, endTime){// initialize the clock
    let clock = document.getElementById(clockId);
    let daysSpan = clock.querySelector('.days');//querySelector return first element that matches te specified  CSS selector(s)
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock(){//updates the clock
        var t =  getTimeRemaining(endTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
        if (t.total<=0){//call the function to update to next year
            addYears(newYear);
        }
    }
    updateClock();
    var timeInterval = setInterval(updateClock, 1);
}
initializeClock('clockDiv', newYear)