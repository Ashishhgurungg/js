let weather = "Cloudy";

switch (weather.toLowerCase()) {
    case "rainy":
        console.log("It is rainy today grab a umbrella");
        break;
    case "sunny":
        console.log("make sure you put the sunscreen");
        break;
    case "windy":
        console.log("Make sure you have a jacket ");
        break;
    case "cloudy":
        console.log("Its cloudy today");
        break;
    default:
        console.log("Name a weather");
        break;
}