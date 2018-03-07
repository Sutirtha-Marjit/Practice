var show = function(){
    console.dir(arguments[0]);
};


function Toy(){
   
}

Toy.prototype.test = function(){
    console.log("Testing done successfully with ");
}
Toy.prototype.name = "TOY";
Toy.prototype.basicIngradients = ['plastic','steel','paper','card-board'];
Toy.prototype.country = 'india';


function ToyCar(){

}

ToyCar.prototype = Object.create(Toy.prototype);
ToyCar.prototype.carName = "JIJO";
var c = new ToyCar();
show(c);