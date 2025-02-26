function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    var num1 = 25.5;
    document.getElementById("round").innerHTML = Math.round(num1);//rounds
    document.getElementById("ceil").innerHTML =  Math.ceil(num1);//rounds up only
    document.getElementById("floor").innerHTML =  Math.floor(num1);//rounds down only
    document.getElementById("trunc").innerHTML =  Math.trunc(num1);//shows integer no rounding
    document.getElementById("sign").innerHTML =  Math.sign(num1); //displays t/f as 1/0
    document.getElementById("pow").innerHTML =  Math.pow(num1, 2);//(num, exponent)
    document.getElementById("min").innerHTML =  Math.min(2, 5, 6, 4, 90, 22);// finds min of presented argument
    document.getElementById("random").innerHTML =  Math.random();// random number between 0 and 1

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random()*10);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    var num2 = 3;
    var comp1 = (num2=='3');
    var comp2 = (num2==='3');
    var comparisons = 'using == evaluates only the value, meaning 3==\'3\' should be '+comp1+' and 3===\'3\' should be '+comp2;
    document.getElementById("comparisons").innerHTML = comparisons;


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}