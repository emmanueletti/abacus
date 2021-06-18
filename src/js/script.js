import { calc0 } from './components/calculators.js';

const calculatorCards = document.querySelectorAll('.card');
const calcContainer = document.getElementById('calc-container');
const backButton = document.getElementById('back-btn');

// add click event listener to each card
calculatorCards.forEach((card, index) => {
	card.addEventListener('click', () => {
		// reveal back button
		backButton.classList.toggle('hidden');
		backButton.addEventListener('click', (e) => {
			backButton.classList.add('hidden');
			calcContainer.innerHTML = '';
			calculatorCards.forEach((card) => {
				card.classList.remove('hidden');
			});
		});

		// hide all cards
		calculatorCards.forEach((card) => {
			card.classList.toggle('hidden');
		});

		// add the correct card to the site by dynamically generating the name of the correct calc()import based on the card nodeList index  - the title of the imported calculator functions have been named to match the index of the cards
		let calculatorContent = `calc${index}()`;

		// add in the correct calculators HTML
		calcContainer.innerHTML = eval(calculatorContent);

		// create the calculator functionality
		const currentAmount = document.querySelector('#current-amount');
		const annualContribution = document.querySelector('#contribution-amount');
		const currentAge = document.querySelector('#current-age');
		const retirementAge = document.querySelector('#end-age');
		const annualReturn = document.querySelector('#annual-return');
		const mer = document.querySelector('#mer');

		currentAmount.addEventListener('input', (e) => {
			investmentFeesData.currentAmount = Number(e.target.value);
		});
		annualContribution.addEventListener('input', (e) => {
			investmentFeesData.annualContribution = Number(e.target.value);
		});
		currentAge.addEventListener('input', (e) => {
			investmentFeesData.currentAge = Number(e.target.value);
		});
		retirementAge.addEventListener('input', (e) => {
			investmentFeesData.retirementAge = Number(e.target.value);
		});
		annualReturn.addEventListener('input', (e) => {
			investmentFeesData.annualReturn = parseFloat(e.target.value);
		});
		mer.addEventListener('input', (e) => {
			investmentFeesData.mer = parseFloat(e.target.value);
		});

		// get calculator results from API
		const investmentFeesSubmit = document.querySelector('#calulate-investment-fees');

		// post request to API
		const totalWithoutFees = document.querySelector('#totalWithoutFees');
		const amountOfFees = document.querySelector('#amountOfFees');
		const percentToKeep = document.querySelector('#percentToKeep');

		const processNumber = (number) => {
			let processed = Math.round(number).toLocaleString();
			return processed;
		};

		investmentFeesSubmit.addEventListener('click', () => {
			fetch('http://localhost:5000/api/investment-returns', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(investmentFeesData),
			})
				.then((response) => response.json())
				.then((data) => {
					// investment api returns calculation
					totalWithoutFees.innerHTML = `$${processNumber(data.totalWithoutFees)}`;
					amountOfFees.innerHTML = `$${processNumber(data.totalWithoutFees - data.totalWithFees)}`;
					percentToKeep.innerHTML = `${(data.totalWithFees / data.totalWithoutFees).toFixed(2) * 100}%`;

					let percent = (data.totalWithFees / data.totalWithoutFees).toFixed(2) * 100;

					if (percent < 70) {
						amountOfFees.style.color = 'red';
						percentToKeep.style.color = 'red';
					} else {
						amountOfFees.style.color = 'black';
						percentToKeep.style.color = 'green';
					}
				});
		});
	});
});

// go back button

// event listener - every change to input value will be stored in object
const investmentFeesData = {
	currentAmount: 5000,
	annualContribution: 1000,
	currentAge: 18,
	retirementAge: 65,
	annualReturn: 7,
	mer: 2.23,
};

// can this copy and paste job be simplified?
