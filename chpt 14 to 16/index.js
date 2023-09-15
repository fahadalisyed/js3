//var studentNames = ;[]
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [ 1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["apple", 3, "banana", false, 42,];
var educationQualifications =[
    "SSC",
    "HSC",
    "BSC",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
];
document.write(`${educationQualifications[0]}<br>`)
document.write(`${educationQualifications[1]}<br>`)
document.write(`${educationQualifications[2]}<br>`)
document.write(`${educationQualifications[3]}<br>`)
document.write(`${educationQualifications[4]}<br>`)
document.write(`${educationQualifications[5]}<br>`)
document.write(`${educationQualifications[6]}<br>`)
document.write(`${educationQualifications[7]}<br>`)


var studentNames = ["Alice", "Bob", "Charlie"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
     console.log(studentNames[i] + " scored " + studentScores[i] +" out of " + "totalMarks + ", " with a percentage of " + percentage.toFixed(2) + " %.");
}

//intialize an array with color names.
 var colors = ["Red", "Green", "Blue"];

 //Display the intial array.
 document.write("Initial array:" + colors.jion(", ") + "<br>");
  
 // a. Ask the user what color to add to the beginning
 var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
 colors.unshift(colorToAddBeginning);

 //Display the updated array
 document.write("Array after adding color at the beginning: " + colors.jion(",") + "<br>");

 // b. ask the user what color to add to the end
 var colorToAddAtEnd = prompt("Enter a color to add to the end:");
 colors.push(colorToAddAtEnd);

 //Display the  updated array
 document.write("Array after adding color at the end: " + colors.jion(", ") +"<br>");

 // c. Add two more colors to the beginning
 colors.unshift("orange", "yellow");
  
 //Display the updated array
 document. write("Array after adding two colors at the beginning:" + colors.jion(", ") + "<br>");

 // d. Delete the frist color
 colors.shift();

 //Display the updated array
 document. write("Array after deleting the frist color: " + colors.jion(", ") + "<br>");

 // e. Delete the last color
 colors.pop();

 // Display the updated array
 document.write("Array after deleting the last color:" + colors.jion(", ") + "<br>");
  
// f. Ask the user at which index to add a color
var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add at the index:");
colors.splice(indexToAddColor,0,colorToAddAtIndex);

//Display the  updated array
document.write("Array after adding color at the  specified index" + colors.join(", ") + "<br>");

//g. Ask the user at which index to delete color(s)
var indexToDeleteColors = parseInt(prompt("Enter the index to start deleting from:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice("indexToDeleteColors, numberOfColorsToDelete");

//Display the final updated array
document.write("Final array deleting specified colors:" + colors.join(", ") + "<br>");




// Initialize an array with city names
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

// Initialize an empty array to store selected city names
var selectedCities = [];

// Copy the first three elements from cities to selectedCities
selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);

// Display the contents of selectedCities
console.log("Selected cities: " + selectedCities.join(", "));



var arr = ["This", "is", "my", "cat"];
var combinedString = arr.join(" ");




// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create a dropdown/select menu using document.write()
document.write("<label for='manufacturer'>Select a phone manufacturer:</label>");
document.write("<select id='manufacturer'>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
console.log(combinedString);   


