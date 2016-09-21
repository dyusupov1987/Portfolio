var animals = ["dog", "cat", "rabbit", "hamster", "bird", "turtle", "gerbil", "chicken"];

var animal = "";

function createList (){
for (var i = 0; i < animals.length; i++) {
    console.log(i);
    animal += animals[i];
   var para = document.createElement("P");
    var t = document.createTextNode(animals[i]);
    para.appendChild(t);
    document.body.appendChild(para)
}
}

createList();
/*
    document.getElementById("animal").innerHTML = animal;
*/


function addAnimal() {
    var newAnimal = document.getElementById('new-animal').value
    animals.push(newAnimal);
}
