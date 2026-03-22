let day = "Friday";

switch (day.toLowerCase()) {
    case "sunday":
    case "monday":
        console.log("week start");
        break;

    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("mid week");
        break;
    case "friday":
    case "saturday":
        console.log("weekend");
        break;
    default: console.log("invalid day");
        break;

}