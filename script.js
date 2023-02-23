let newYear = new Date(2023, 0, 1, 0, 0, 0);
function addYears(date){//will add one year to var newYear when called
    date.setFullYear(date.getFullYear() + 1);
  };

let myfunc = setInterval(function() { //function to calc how many days
    let now = Date.now(); //gets today and now
    let timeleft = newYear - now; //calculate how many time left to new year
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); //transform with math floor in days
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days; //put the var result in the CSS selector
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds; 

    if (timeleft < -5){//call the function to update to next year
        addYears(newYear);
    };
    
    let mess = new Date(2024,00,01); //gets new year
    let messMonth = mess.getMonth() +1;
    let messDay = mess.getDate();
    let today = new Date()
    let nowMonth= today.getMonth() +1;
    let nowDay= today.getDate();

    if ((messMonth == nowMonth) && (messDay == nowDay)){//call the function to display Message
        document.querySelector('.message').innerHTML = "Happy New Year!!!"; 
        document.body.style.backgroundImage = "url(./img/bckgrnd.jpg)";
    };

    }, 1)//set interval to 1 to milliseconds

