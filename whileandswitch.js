// Find even numbers in first 10 numbers using while loop
var a=1;
while(a<=10){
    if(a%2==0){
        console.log(a);
    }
    a++;
}

// Countdown timer using while loop and the countdown should starts from 10
var b=10;
while(b>=1){
    console.log("wait for few seconds",b);
    b--;
}console.log("welcome to ahaaa.....");

// Find day of the week using switch case
var a = "monday";
switch (a) {
    case "monday":
        console.log("weekday1");
        break;
    case "tuesday":
        console.log("weekday2");
        break;
    case "wednesday":
        console.log("weekday1");
        break;
    case "thursday":
        console.log("weekday2");
        break;
    case "friday":
        console.log("weekday2");
        break;
    case "saturday":
        console.log("weekend");
        break;
    case "sunday":
        console.log("weekendd");
        break;
    default:
        console.log("work every day");
}


// Find month of the year using switch case

var d = "march";
switch (d) {
    case "january":
        console.log("1st month");
        break;
    case "febrauary":
        console.log("2nd month");
        break;
    case "march":
        console.log("3rd month");
        break;
    case "april":
        console.log("4th month");
        break;
    case "may":
        console.log("5th month");
        break;
    case "june":
        console.log("6th month");
        break;
    case "july":
        console.log("7th month");
        break;
        case "august":
            console.log("8th month");
            break;
        case "september":
            console.log("9th month");
            break;
        case "october":
            console.log("12th month");
            break;
        case "november":
            console.log("11th month");
            break;
        case "december":
            console.log("12th month");
            break;
    default:
        console.log("work every day");
}

