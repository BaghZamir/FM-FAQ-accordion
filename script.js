let question = document.querySelectorAll('.accordion > h2');
let expand = document.querySelector('nav > .expand');

const toggleAccordion = (el) =>{
	//finds parent element to clicked element, that is the whole accordion
	let parent = el.target.parentElement;
	//finds next sibling element that is the answer container
	let answer = el.target.nextElementSibling;
	//checks if answer element is open or closed
	if (parent.classList.contains("open")){
		//if open, gives answer max height of 0 to close it
		answer.style.maxHeight = '0';
	} else {
		//else gives it max height of content height
		answer.style.maxHeight = answer.scrollHeight + 'px';
	}
	//toggles the class. So if open it closes and vice versa
	parent.classList.toggle("open");
};

const toggleMenu = (el) =>{
	//finds parent element to clicked element, that is the whole accordion
	let parent = el.target.parentElement;
	parent.classList.toggle("open");
};

//accordions
question.forEach(el => {
	//each question is clickable and executes toggleAccordion function
	el.addEventListener('click', toggleAccordion );
});
//menu expander
expand.addEventListener('click', toggleMenu );