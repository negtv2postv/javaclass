class Fruit {
    constructor(name, color) {
        this._name = name;
        this._color = color;
        this._flavor = 10;
    }
    get name() {
        return this._name;
    }
    get color() {
        return this._color;
    }
   
    ripe() {
        this._name = true;
        console.log(`fruit is ripe ${this._name}`);
    }
    flavor(flavor) {
        this._flavor += flavor;
        console.log(`it taste tangy ${this._flavor}`);
    }
}
var Orange = new Fruit("Florida", "Orange");

console.log(Orange.name);
console.log(Orange.color);
Orange.flavor(10);
Orange.ripe();

class Mixer extends Fruit {
    constructor(name,color,mix) {
        super(name,color);
        this._mix = mix;
    }
    get mix() {
        return this._mix;
    }
}

var drink = new Mixer("Cranberry", "Orange", "Jaded");
console.log(drink.mix);
