// Syntax
// switch () {
//   case value:
    
//     break;

//   default:
//     break;
// } 

const month = 3
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break; // Used to break the control flow cause if we don't use break it will also run the next statement except default
  case 4:
    console.log("April");
    break;
  default:
    break;
}
const monthname = "march"
switch (month) {
  case "jan":
    console.log("january");
    break;
  case "feb":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  case "april":
    console.log("April");
    break;
  default:
    break;
}
