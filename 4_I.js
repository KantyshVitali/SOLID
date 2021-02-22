// Interface Segregation Principle (Принцип разделения интерфейса).

// class Animal {
// 	constructor(name) {
// 		this.name = name;	
// 	}
	
// 	walk() {
// 		console.log(`${this.name} can walk`);
// 	}

// 	swim() {
// 		console.log(`${this.name} can swim`);
// 	}

// 	fly() {
// 		console.log(`${this.name} can flight`);
// 	}
// }

// class Dog extends Animal {
// 	fly() {
// 		return null;
// 	}
// }

// class Eagle extends Animal {
// 	swim() {
// 		return null;
// 	}
// }

// class Whale extends Animal {
// 	fly() {
// 		return null;
// 	}
// 	swim() {
// 		return null;
// 	}
// }

// const dog = new Dog('Rex');
// const whale = new Whale('Whale');
// const Eagle = new Eagle('Eagle');


class	Animal {
	constructor(name) {
		this.name = name;		
	}	
}

class Swimmer {
	swim() {
		console.log(`${this.name} can swim`);
	}
}

class Walker {
	walk() {
		console.log(`${this.name} can walk`);
	}
}

class Flier {
	fly() {
		console.log(`${this.name} can fly`);
	}
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, Swimmer, Walker);
Object.assign(Eagle.prototype, Flier, Walker);
Object.assign(Whale.prototype, Swimmer);

const dog = new Dog('Rex');

dog.swim();
dog.walk();