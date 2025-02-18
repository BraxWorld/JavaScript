function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Braxton Angelo"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let add = "10+20=" + 30;
    document.getElementById("add").innerHTML = add;
       
    


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let eq = 10 + 20;
    document.getElementById("to-string").innerHTML = eq.toString();


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let ex = 2;
    document.getElementById("exponent").innerHTML = ex.toExponential(6);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let fixed = 2.34354353;
    document.getElementById("fixed").innerHTML = fixed.toFixed(3);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let pre = 2.335465;
    document.getElementById("precision").innerHTML = pre.toPrecision(3);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let parse1 = "100.01 25";
    document.getElementById("float").innerHTML = parseFloat(parse1);

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt(parse1);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    let words = "Using == compares the two values after converting them to the same data type where as === does not convert the data type meaning you are testing the value and the type of data."
    document.getElementById("equals").innerHTML = words;

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    let logic = "Using 'and' checks each statement and require that all of them are true to return as true. 'Or' on the other hand only requires that one of the statements is true for it to return true";
    document.getElementById("logic").innerHTML=logic;



    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    let num = 3;

    switch(num){
        case 1:
            document.getElementById("switch").innerHTML = "the number is 1";
            break;
        case 2:
            document.getElementById("switch").innerHTML = "the number is 2";
            break;
        case 3:
            document.getElementById("switch").innerHTML = "the number is 3";
            break;
    }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let charClass = "ranger";
    charClass === "ranger"
        ? document.getElementById("ternary").innerHTML = "You are the ranger class"
        : document.getElementById("ternary").innerHTML = "You are the rouge class";

}