let newYear = new Date(2024, 0, 1, 0, 0, 0);

function addYears(date){//will add one year to var newYear when called
    date.setFullYear(date.getFullYear() + 1);
  };

var myfunc = setInterval(function() { //function to calc how many days
    var now = Date.now(); //gets today and now
    var timeleft = newYear - now; //calculate how many time left to new year
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); //transform with math floor in days
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days; //put the var result in the CSS selector
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    if (timeleft <= 0){//call the function to update to next year
        addYears(newYear);
    };

    }, 1)//set interval to 1 to milliseconds