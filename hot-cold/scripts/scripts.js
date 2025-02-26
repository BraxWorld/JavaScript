let answer = (Math.floor(Math.random()*100));


function start()
{
    alert(answer);
}


function calcGuess()
{
    userNum = document.getElementById("guess").value;
    alert(userNum); // make sure value is being passed

    if (userNum == answer)
    {
        document.getElementById("indicator").style.color = "green";
        document.getElementById("indicator").innerHTML = "Correct, YOU WIN!";
        document.getElementById("submit").style.display = "none"
    }
    else
    {
        var distance = Math.abs(userNum-answer);
        if (distance > 50)
        {
            document.getElementById("indicator").style.color = "darkblue"
            document.getElementById("indicator").innerHTML = "Freezing Cold";
        }
        else if (distance > 40)
        {
            document.getElementById("indicator").style.color = "blue"
            document.getElementById("indicator").innerHTML = "Very Cold";
        }
        else if (distance > 30)
        {
            document.getElementById("indicator").style.color = "lightblue"
            document.getElementById("indicator").innerHTML = "Cold";
        }
        else if (distance > 20)
        {
            document.getElementById("indicator").style.color = "orange"
            document.getElementById("indicator").innerHTML = "Warm";
        }
        else if (distance > 10)
        {
            document.getElementById("indicator").style.color = "red"
            document.getElementById("indicator").innerHTML = "Very Warm";
        }
        else if (distance < 10)
        {
            document.getElementById("indicator").style.color = "brightred"
            document.getElementById("indicator").innerHTML = "On Fire";
        }


    }
}

