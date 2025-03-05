function switchAndLoop()
{
    
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let holiday = " ";


    for(let x in months)
    {
        console.log(x);
        switch (parseInt(x))
        {
            case 0:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: New Years Day & Martin Luther King Jr Day";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 1:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Valentines Day & President's Day";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 2:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays:  St. Patrick's Day & International Women's Day";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 3:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays:  April Fool's Day & Easter";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 4:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Memorial Day & Mother's Day ";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 5:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Flag Day & Juneteenth";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 6:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: 4th of July & Bastille day";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 7:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: National Friendship Day & Women's Equality Day";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 8:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Labor Day  & Patriot Day ";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 9:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Columbus Day & Halloween";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 10:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Veterans Day & Thanksgiving";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

            case 11:
                holiday = "<br>" + months[x].toUpperCase() + " | Holidays: Christmas & Chanukka";
                document.getElementById("holidays").innerHTML += holiday+ "<br>";
                break;

        }
        
    }

}
