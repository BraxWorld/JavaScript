function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Braxton Angelo";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    var myStringLength = myString.length;
    document.getElementById("length").innerHTML = myStringLength;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escString = "\"one\" \"two\" \"three\"";
    document.getElementById("escape").innerHTML = escString;
    

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph

    let fullName = "Braxton C Angelo"
    let fName = fullName.slice(0, 7);
    let mName = fullName.slice(8, 9);
    let lName = fullName.slice(10, 16);

    document.getElementById("first").innerHTML = fName;


    // Use the Javascript substring Method to display your middle name to the middle paragraph

    document.getElementById("middle").innerHTML = mName;

    // Use the JavaScript subst Method to display your last name to the last paragraph

    document.getElementById("last").innerHTML = lName;

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "Web Development");
    document.getElementById("major").innerHTML=newMajor;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let upperMyText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperMyText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let untrimText = "                  McHenry County College                "
    let trimText = untrimText.trim();
    document.getElementById("trim").innerHTML = trimText;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"

    let monthsIndex = months.indexOf("May");
    document.getElementById("index").innerHTML = monthsIndex;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "braxton";
    let last = "angelo";

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph

    let greeting = `Hello my name is ${first} ${last}`;
    document.getElementById("greeting").innerHTML = greeting;
}