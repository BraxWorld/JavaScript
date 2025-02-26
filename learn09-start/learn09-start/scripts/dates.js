/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

const day = new Date();
document.getElementById("basic").innerHTML = day;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const today = new Date(2025, 1, 24 );
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

const birthday = new Date(2004, 1, 5);
document.getElementById("birthday").innerHTML = birthday.toDateString();


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = day.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

const isoDay = new Date("2004-02-06");
document.getElementById("date1").innerHTML = isoDay;
const shortDay = new Date("02/05/2004");
document.getElementById("date2").innerHTML = shortDay;
const longDay = new Date("5 February 2004");
document.getElementById("date3").innerHTML = longDay;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = day.getFullYear();
document.getElementById("get2").innerHTML = day.getDay();
document.getElementById("get3").innerHTML = day.getDate();
document.getElementById("get4").innerHTML = day.getTime();
// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
birthday.setDate(1);
document.getElementById("set1").innerHTML = birthday;
birthday.setFullYear(1999);
document.getElementById("set2").innerHTML = birthday;
birthday.setMonth(11);
document.getElementById("set3").innerHTML = birthday;
birthday.setMinutes(22);
document.getElementById("set4").innerHTML = birthday;