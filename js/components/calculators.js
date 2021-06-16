const calc0 = () => {
	return `<div class="container calc-0">
	<div class="calc header">
		<h1 class="calc-0__title">How Much Are You Truely Paying in Fees?</h1>
		<p class="calc-0__body">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt doloribus, quo blanditiis ut sed magni eligendi nemo inventore! Dolorum Lorem
			ipsum dolor, sit amet consectetur adipisicing elit. Deserunt doloribus, quo blanditiis ut sed magni eligendi nemo inventore!
		</p>
	</div>

	<div class="calc result">
		<div class="fees-result">
			<h1 class="result__title">200k</h1>
			<p class="result__text">TOTAL AT RETIRMENT</p>
		</div>
		<div class="fees-result left-border right-border">
			<h1 class="result__title">100k</h1>
			<p class="result__text">LOST IN FEES</p>
		</div>
		<div class="fees-result">
			<h1 class="result__title">50%</h1>
			<p class="result__text">LEFT TO KEEP</p>
		</div>
	</div>

	<div class="calc row">
		<div class="calc col">
			<h3>Current Situation</h3>
			<label for="current-amount">How much do you have invested?</label>
			<input class="" type="number" name="current-amount" id="current-amount" placeholder="5000" />
			<label for="contribution-amount">How much do you contribute yearly?</label>
			<input class="" type="number" name="contribution-amount" id="contribution-amount" placeholder="1000" />
			<label for="current-age">How old are you?</label>
			<input class="" type="number" id="current-age" name="current-age" placeholder="18" min="18" max="100" />
			<p class="input-tip">(Input number between 18 and 100)</p>
		</div>
		<div class="calc col">
			<h3>Retirement</h3>
			<label for="end-age">What age do you hope to retire?</label>
			<input class="" type="number" id="end-age" name="end-age" placeholder="65" min="18" max="100" />
			<p class="input-tip">(Input number between 18 and 100)</p>
			<h3>Investment Detail</h3>
			<label for="mer">What is your <span>Management Expense Ratio (M.E.R)?</span></label>
			<input class="" type="number" id="mer" name="mer" min="0" max="5" step="0.1" placeholder="2.23" /><span> %</span>
			<p class="input-tip">(Input number between 0 and 5)</p>
		</div>
	</div>
	<h3>Assumptions</h3>
	<ul>
		<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga.</li>
		<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, est?</li>
		<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dignissimos.</li>
		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, deserunt!</li>
		<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ab.</li>
	</ul>
</div>`;
};

export { calc0 };
