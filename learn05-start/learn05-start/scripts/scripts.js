// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Sunny",
    image: "images/gold-dog.jpg",
    caption: "In the Sun",
    altTag: "dog in the sun"
};

const dog3 = {
    heading: "Snowy Dog",
    image: "images/snow-dog.jpg",
    caption: "Chilling with a Snowman",
    altTag: "dog and snowman"
};

const dog4 = {
    heading: "Two Dogs",
    image: "images/white-dogs.jpg",
    caption: "Two dogs hanging out",
    altTag: "two white dogs"
};

function chooseDog(dog) {
    if (dog == 1) {
    loadMe(dog1, 1) // don't put dog1 in quotes or it will pass a string   not the object
    document.getElementById("button1").style.display= "none"
    
 }

 if (dog == 2) {
    loadMe(dog2, 2) // don't put dog1 in quotes or it will pass a string   not the object
    document.getElementById("button2").style.display= "none"
    
 }

 if (dog == 3) {
    loadMe(dog3, 3) // don't put dog1 in quotes or it will pass a string   not the object
    document.getElementById("button3").style.display= "none"
    
 }

 if (dog == 4) {
    loadMe(dog4, 4) // don't put dog1 in quotes or it will pass a string   not the object
    document.getElementById("button4").style.display= "none"
    
 }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}