/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

let games = ["Monster Hunter ", "Pokemon ", "Counter Strike ", "Path of Exile ", "PUBG "];

for (g of games)
{
    
    document.getElementById("list").innerHTML += "| " + g;
    
};


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

let songs = new Set(["Rockstar Made", "Go2DaMoon", "Stop Breathing", "Beno!", "JumpOutTheHouse"]);

for (s of songs)
{
        
    document.getElementById("set1").innerHTML += " | " + s;
        
};

// add two more songs to the set then display in the set2 paragraph

let song6 = "M3tamorphosis";
let song7 = "Slay3r";

songs.add(song6);
songs.add(song7);

for (s2 of songs)
{
        
    document.getElementById("set2").innerHTML += " | " + s2;
        
};



/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

let emails = new Map 
([
    ["john", "john123@gmail.com"],
    ["james", "james123@gmail.com"],
    ["bob", "bob123@gmail.com"],
    ["will", "will123@gmail.com"],
    ["dan", "dan123@gmail.com"]
])

emails.forEach (function(value, key)
{

    document.getElementById("map1").innerHTML += key + " | " + value + "<br>";

})

// add two new names and emails and display in map2 use the forEach() method

emails.set("jimmy","jimmy123@gmail.com");
emails.set("tom","tom123@gmail.com");

emails.forEach (function(value, key)
{

    document.getElementById("map2").innerHTML += key + " | " + value + "<br>";

})


// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = emails.get("bob");