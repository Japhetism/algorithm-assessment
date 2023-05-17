class Animal {
    
    sound() {
        console.log("Animal sound");
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }

    sound() {
        console.log("meow");
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    sound() {
        console.log("woof");
    }
}

const cat = new Cat();
const dog = new Dog();

cat.sound();
dog.sound();