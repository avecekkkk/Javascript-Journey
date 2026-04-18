function seasonfinder(month){
    switch(month){
        case "December":
        case "January":
        case "February":
            return "Winter";
        case "March":
        case "April":
        case "May":
            return "Spring"
        case "June":
        case "July":
        case "August":
            return "Summer"
        case "September":
        case "October":
        case "November":
            return "Autumn"
        default:
            return "Invalid Month"
    }
}

console.log(seasonfinder("December"));
