// Liskov Substitution Principle (Принцип подстановки Барбары Лисков).

class Person {	
}

class Member extends Person {
	access() {
		console.log('You have an access');
	}
}

class Guest extends Person {
	isGuest = true;
}

class FrontEnd extends Member {
	canCreateFrontEnd() {}
}

class BackEnd extends Member {
	canCreateBackEnd() {}
}

class WrongPerson extends Guest {
	access() {
		throw new Error('You dont have access');
	}
}

function openSecret(member) {
	member.access();
}

// openSecret(new FrontEnd());
// openSecret(new FrontEnd());
// openSecret(new WrongPerson());


class Component {
	
}

class ComponentDOM extends Component{
	render() {
		return `<div>Component</div>`;
	}
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentDOM {
	onInit() {}
}

class FooterComponent extends ComponentDOM {
	afterInit() {}
}

function renderComponent(component) {
	console.log(component.render()); 
}

class HOC extends HigherOrderComponent {
	render() {
		throw new Error('Render is impossible here');
	}

	wrapComponent(component) {
		component.wrapped = true;
		return component;
	}
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
// renderComponent(new HOC());

