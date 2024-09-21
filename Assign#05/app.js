// Question # 01

// var studentNames = [];
// space given for store names in future

// studentNames.push("John");
// studentNames.push("Sara");
// studentNames.push("Ahmed");

// console.log(studentNames); // Output: ["John", "Sara", "Ahmed"]

// Question # 02
// var studentNames = [];

// Question # 03

// var studentNames = ["Ali", "Sara", "Ahmed", "John"];

// Question # 04

// var numbers = [10, 20, 30, 40, 50];

// Question # 05
// var booleans = [true, false, true, false, true];

// Question # 06
// var studentNames = [true, 100, "Ahmed", 1200];
// Question # 07

// var edu_stu=["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","Phd"]
// document.write("<h1>Qualification</h1>"  + edu_stu[0])

// document.write(edu_stu[1] + "<br>")

// document.write(edu_stu[2] + "<br>")

// document.write(edu_stu[3] + "<br>")

// document.write(edu_stu[4] + "<br>")

// document.write(edu_stu[5] + "<br>")

// document.write(edu_stu[6] + "<br>")

// document.write(edu_stu[7] + "<br>")

// document.write(edu_stu[8] + "<br>")

// Question # 08
// var name = ["Ali","Raza","azeem"]
// var score = [320,230,480]



// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
    
//     var percentage = (studentScores[i] / totalMarks) * 100;
    
    
//     document.write("Student: " + studentNames[i] + "<br>");
//     document.write("Score: " + studentScores[i] + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");
// }

// Question # 09


// Part 1: 
// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br><br>");

// Part 2: 
// var colorStart = prompt("What color would you like to add to the beginning?");
// colors.unshift(colorStart);
// document.write("<b>After adding color at the beginning:</b> " + colors.join(", ") + "<br><br>");

// Part 3:
// var colorEnd = prompt("What color would you like to add to the end?");
// colors.push(colorEnd);
// document.write("<b>After adding color at the end:</b> " + colors.join(", ") + "<br><br>");

// Part 4: 
// colors.unshift("Purple", "Orange");
// document.write("<b>After adding two colors at the beginning:</b> " + colors.join(", ") + "<br><br>");

// Part 5: 
// colors.shift();
// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br><br>");

// Part 6: 
// colors.pop();
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br><br>");

// Part 7:
// var index = prompt("At which index would you like to add a new color?");
// var newColor = prompt("Enter the color name you want to add:");
// colors.splice(index, 0, newColor);
// document.write("<b>After adding a color at index " + index + ":</b> " + colors.join(", ") + "<br><br>");


// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br><br>");


// var indexToDelete = prompt("At which index would you like to start deleting color(s)?");
// var numberOfColorsToDelete = prompt("How many colors would you like to delete?");

// colors.splice(indexToDelete, numberOfColorsToDelete);

// document.write("<b>After deleting " + numberOfColorsToDelete + " color(s) starting from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br><br>");

// Question # 10

// var studentScores = [78, 85, 62, 90, 95, 88, 70, 55];


// document.write("<b>Original Student Scores:</b> " + studentScores.join(", ") + "<br><br>");


// studentScores.sort(function(a, b) {
//   return a - b;  
// });


// document.write("<b>Sorted Student Scores in Ascending Order:</b> " + studentScores.join(", ") + "<br><br>");

// Question # 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];


// var selectedCities = cities.slice(0, 3); // Copies elements from index 0 to index 2


// document.write("<b>Original Cities:</b> " + cities.join(", ") + "<br><br>");


// document.write("<b>Selected Cities:</b> " + selectedCities.join(", ") + "<br><br>");

// Question # 12

// var arr = ["This ", "is ", "my ", "cat"];


// var singleString = arr.join("");


// document.write("<b>Combined String:</b> " + singleString);

// // Question # 13

// var fifoArray = [];


// function addValue(value) {
//     fifoArray.push(value); 
// }

// function removeValue() {
//     return fifoArray.shift(); 
// }


// addValue("Apple");
// addValue("Banana");
// addValue("Cherry");


// document.write("<b>Current FIFO Array:</b> " + fifoArray.join(", ") + "<br>");


// var removedValue = removeValue();


// document.write("<b>Removed Value:</b> " + removedValue + "<br>");
// document.write("<b>Updated FIFO Array:</b> " + fifoArray.join(", "));

// Question # 14

// var lifoArray = [];


// function addValue(value) {
//     lifoArray.push(value); // Adds the value to the end of the array
// }
// function removeValue() {
//     return lifoArray.pop(); // Removes the last value and returns it
// }


// addValue("Red");
// addValue("Green");
// addValue("Blue");

// document.write("<b>Current LIFO Array:</b> " + lifoArray.join(", ") + "<br>");


// var removedValue = removeValue();

// document.write("<b>Removed Value:</b> " + removedValue + "<br>");
// document.write("<b>Updated LIFO Array:</b> " + lifoArray.join(", "));

// // Question # 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write("<label for='phones'>Choose a phone manufacturer:</label>");
// document.write("<select id='phones'>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");
