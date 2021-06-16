import { calc0 } from './components/calculators.js';

const calculatorCards = document.querySelectorAll('.card');

const mainBodyContainer = document.querySelector('.main-container');

// add click event listener to each card
calculatorCards.forEach((card, index) => {
	card.addEventListener('click', () => {
		// hide all cards
		calculatorCards.forEach((card) => {
			card.classList.toggle('hidden');
		});

		// add the correct card to the site by dynamically generating the name of the correct calc()import based on the card nodeList index  - the title of the imported calculator functions have been named to match the index of the cards
		let calculatorFunction = `calc${index}()`;

		mainBodyContainer.innerHTML = eval(calculatorFunction);
	});
});

// get calculator results from API

// investment returns calculation
