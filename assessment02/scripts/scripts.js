function calcTotal(){
    const tax = .07;

    var cokeTotal = parseFloat(document.getElementById("cokeDrink").value) *2;
    var dewTotal = parseFloat(document.getElementById("dewDrink").value) *2;
    var pepperTotal = parseFloat(document.getElementById("pepperDrink").value) *2;
    var spriteTotal = parseFloat(document.getElementById("spriteDrink").value) *2;
    var lemonTotal = parseFloat(document.getElementById("lemonDrink").value) *2;

    var drinkTotal = cokeTotal + dewTotal + pepperTotal + spriteTotal + lemonTotal;
    
    var hamTotal = parseFloat(document.getElementById("hamSami").value) * 7.50;
    var turkeyTotal = parseFloat(document.getElementById("turkeySami").value) * 7.50;
    var italianTotal = parseFloat(document.getElementById("italianSami").value) *7.50;
    var burgerTotal = parseFloat(document.getElementById("burgerSami").value) * 8.50;
    var veggieTotal = parseFloat(document.getElementById("veggieSami").value) * 5.25;

    var samiTotal = hamTotal + turkeyTotal + italianTotal + burgerTotal + veggieTotal;

    var friesTotal = parseFloat(document.getElementById("friesSide").value) * 3;
    var mozzarellaTotal = parseFloat(document.getElementById("mozzarellaSide").value) * 5;
    var saladTotal = parseFloat(document.getElementById("saladSide").value) * 4.50;
    var chocolateTotal = parseFloat(document.getElementById("chocolateSide").value) * 5;
    var vanillaTotal = parseFloat(document.getElementById("vanillaSide").value) * 5;

    var sideTotal = friesTotal + mozzarellaTotal + saladTotal + chocolateTotal + vanillaTotal;

    var name = document.getElementById("name").value;


    finalTotal = name + " your order totaled to:\n" + " \n|Drinks:$" + drinkTotal + " \n|Sandwiches:$" + samiTotal + " \n|Sides:$"+ sideTotal + " \n|Total:$" + (drinkTotal+samiTotal+sideTotal);
    document.getElementById("recipt").innerHTML = ("%.2f", finalTotal);
}