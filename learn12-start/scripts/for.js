function loops()
{
// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
    let song = "";

    for (let i = 99; i > 0; i--)
    {
        song += i + " bottles of beer on the wall, take one down, pass it around " + (i-1) + " bottles of beer on the wall!" + "<br>";
        
    }
    document.getElementById("beer").innerHTML = song;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    for (let x in months)
    {
        document.getElementById("for-in").innerHTML += " " + months[x] + " ";
    }

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
    let myString = "I love monster hunter!";
    for(let x of myString)
    {
        document.getElementById("for-of").innerHTML += x + '<br>';
    }



// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
    var z = 1;
    while(z<51)
    {
        document.getElementById("while").innerHTML += z + "<br>";
        z++;

    } 
}