const mon1 = {
    name: "Gligar",
    type: "Ground/Flying",
    strongMove: "Crabhammer",
    evolves: "Gliscor",
    pic: "images/250px-0207Gligar.png"

};

const mon2 = {
    name: "Turtwig",
    type: "Grass/Ground",
    strongMove: "Leaf Storm",
    evolves: "Grotle",
    pic: "images/turtwig.png"

};

const mon3 = {
    name: "Garchomp",
    type: "Dragon/Ground",
    strongMove: "Earthquake",
    evolves: "Fully Evolved",
    pic: "images/chomper.png"

};

const mon4 = {
    name: "Raging Bolt",
    type: "Electric/Dragon",
    strongMove: "Draco Meteor",
    evolves: "No Evolution",
    pic: "images/rBolt.png"

};

const mon5 = {
    name: "Ogerpon",
    type: "Grass",
    strongMove: "Ivy Cudgel",
    evolves: "No Evolution",
    pic: "images/ponpon.png"

};


function showMons(){
    let object1 =  `<h2>${mon1.name}</h2>`+
    `<img src = ${mon1.pic}>`+ `<h3>Strongest Move: ${mon1.strongMove}</h3>`+ `<h3>Type: ${mon1.type}</h3>`+`<h3>Evolves into: ${mon1.evolves}</h3>`;
    
    document.getElementById("ob1").innerHTML = object1;

    let object2 =  `<h2>${mon2.name}</h2>`+
    `<img src = ${mon2.pic}>`+ `<h3>Strongest Move: ${mon2.strongMove}</h3>`+ `<h3>Type: ${mon2.type}</h3>`+`<h3>Evolves into: ${mon2.evolves}</h3>`;
    
    document.getElementById("ob2").innerHTML = object2;

    let object3 =  `<h2>${mon3.name}</h2>`+
    `<img src = ${mon3.pic}>`+ `<h3>Strongest Move: ${mon3.strongMove}</h3>`+ `<h3>Type: ${mon3.type}</h3>`+`<h3>Evolves into: ${mon3.evolves}</h3>`;
    
    document.getElementById("ob3").innerHTML = object3;

    let object4 =  `<h2>${mon4.name}</h2>`+
    `<img src = ${mon4.pic}>`+ `<h3>Strongest Move: ${mon4.strongMove}</h3>`+ `<h3>Type: ${mon4.type}</h3>`+`<h3>Evolves into: ${mon4.evolves}</h3>`;
    
    document.getElementById("ob4").innerHTML = object4;

    let object5 =  `<h2>${mon5.name}</h2>`+
    `<img src = ${mon5.pic}>`+ `<h3>Strongest Move: ${mon5.strongMove}</h3>`+ `<h3>Type: ${mon5.type}</h3>`+`<h3>Evolves into: ${mon5.evolves}</h3>`;
    
    document.getElementById("ob5").innerHTML = object5;
}


