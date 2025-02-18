function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById("name").innerHTML = "Braxton Angelo";

    // Create an array called months that holds all the months of the year
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    // use the index to print the month May from the months array the may paragraph

    let may = months[4];
    document.getElementById("may").innerHTML = may;


    // print the length of the month array to the length paragraph
    document.getElementById("length").innerHTML = months.length;

    // Loop through all of the months array and print each month to the months paragraph
    let allMonths = ""
    for (let c=0; c<months.length; c++)
    {
        allMonths = allMonths + " " + months[c];
    }
    document.getElementById("months").innerHTML = allMonths;

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    document.getElementById("string").innerHTML = months.toString();

    // create two new arrays - weekends and weekdays, add the appropriate days to each
    let weekends = ["fri", "sat", "sun"];
    let weekdays = ["mon", "tue", "wed", "thu"];

    // join the two arrays into a new array - week
    //var week = [weekdays + "," + weekends]; when you concatenate them it becoms a string and I can't do pop
    let week = ["mon", "tue", "wed", "thu","fri", "sat", "sun"];

    // print the contents of week to the week paragraph
    document.getElementById("week").innerHTML = week;

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    week.pop();
    document.getElementById("pop").innerHTML = week;

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    fruits.push("Watermelon");
    fruits.push("grapes");
    document.getElementById("fruits").innerHTML = fruits;


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.unshift("pear");
    document.getElementById("fruits2").innerHTML = fruits;

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
    document.getElementById("sorted").innerHTML = languages.sort();
    document.getElementById("reversed").innerHTML = languages.reverse();
    // use the compare function to sort the numbers  and print to the num-sorted paragraph

    numbers = [42, 23, 21, 50, 20, 6, 31, 9]
    document.getElementById("num-sorted").innerHTML = numbers.sort(function (a, b){return b - a});
    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}