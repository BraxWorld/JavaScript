// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  


 // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name1 = "Brax";
    //fix the errors
    var firstName = "Braxton",
        lastName = "Angelo";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    const taxRate = .07;
    let firstName="Braxton";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Flart"
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breeds;
}


function myMath() {
    // create statements demonstrating the use of each operator +,-,*,**,/,%,++,--
    
    let addition = 10+32;
    document.getElementById("addition").innerHTML = "10+32 = " + addition;
    let subtraction = 11-10;
    document.getElementById("subtraction").innerHTML = "11-10 = " + subtraction;
    let multiply = 2*3;
    document.getElementById("multiplication").innerHTML = "2 x 3 = " + multiply;
    let exponent = 2**3;
    document.getElementById("exponent").innerHTML = "2 to the third = " + exponent;
    let division = 6/2;
    document.getElementById("division").innerHTML = "6/2 = " + division;
    let modulus = 7%2;
    document.getElementById("modulus").innerHTML = "the remander of 7/2 = " + modulus;
    let increment = 2;
    increment++;
    document.getElementById("increment").innerHTML = "2 incremented is = " + increment;
    let decrement = 2;
    decrement--;
    document.getElementById("decrement").innerHTML = "2 decremented is = " + decrement;

}


function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + " x = " + x;
    x += 1;    
    document.getElementById("plus-equals").innerHTML = "x += 1" + " x = " + x;
    x = 10
    x -= 1;
    document.getElementById("minus-equals").innerHTML = "x -= 1" + " x = " + x;
    x = 10
    x *= 2;
    document.getElementById("times-equals").innerHTML = "x *= 2" + " x = " + x;
    x = 10
    x /= 2;
    document.getElementById("divide-equals").innerHTML = "x /= 2" + " x = " + x;
    x = 10
    x %= 3;
    document.getElementById("modulus-equals").innerHTML = "x %= 3" + " x = " + x;

}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const mons = ["charmander", "squirtle", "bulbasuar"];
    document.getElementById("array").innerHTML = mons;
    const charmander = {type:"fire", stage:"basic", finalEvo:"Charizard"};
    document.getElementById("object").innerHTML = mons[0] + " " + charmander.type + " " + charmander.stage + " " + charmander.finalEvo

}
