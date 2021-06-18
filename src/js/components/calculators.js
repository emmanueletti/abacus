const calc0 = () => {
	return `<div class="container calc-0">
				<div class="calc header">
					<h1 class="calc-0__title">How Much Are You Truely Paying in Fees?</h1>
					<p class="calc-0__body">
						One of the biggest determinants of how much you end with up when you retire is the fees you pay during your investing years. Beyond making
						regular contributions to tax advantaged accounts like your TFSA and RRSP, the second best thing you can do for your future self is to keep
						an eye on the management fees charged by your advisor, bank, brokerage, and/or investment fund.
					</p>
				</div>

				<div class="calc result">
					<div class="fees-result">
						<h1 class="result__title" id="totalWithoutFees">-</h1>
						<p class="result__text">TOTAL AT RETIRMENT</p>
					</div>
					<div class="fees-result left-border right-border">
						<h1 class="result__title" id="amountOfFees">-</h1>
						<p class="result__text">LOST IN FEES</p>
					</div>
					<div class="fees-result">
						<h1 class="result__title" id="percentToKeep">-</h1>
						<p class="result__text">LEFT TO KEEP</p>
					</div>
				</div>

				<div class="calc row">
					<div class="calc col">
						<h3>Current Situation</h3>
						<label for="current-amount">How much do you have invested?</label>
						<input class="" type="number" name="current-amount" id="current-amount" value="10000" />
						<label for="contribution-amount">How much do you contribute yearly?</label>
						<input class="" type="number" name="contribution-amount" id="contribution-amount" value="6000" />
						<label for="current-age">How old are you?</label>
						<input class="" type="number" id="current-age" name="current-age" value="32" min="18" max="100" />
						<p class="input-tip">(Input number between 18 and 100)</p>
					</div>
					<div class="calc col">
						<h3>Retirement</h3>
						<label for="end-age">What age do you hope to retire?</label>
						<input class="" type="number" id="end-age" name="end-age" value="65" min="18" max="100" />
						<p class="input-tip">(Input number between 18 and 100)</p>
						<h3>Investment Detail</h3>
						<label for="annual-return">What annual return do you anticipate? </label>
						<input class="" type="number" id="annual-return" name="annual-return" min="0" max="10" step="0.1" value="6" /><span> %</span>
						<p class="input-tip">(Input number between 0 and 10)</p>

						<label for="mer">What is your investments annual management fees? <br />(aka <span>Management Expense Ratio (M.E.R))</span></label>
						<input class="input-enlarged" type="number" id="mer" name="mer" min="0" max="10" step="0.1" value="2.23" /><span> %</span>
						<p class="input-tip">(Input number between 0 and 10)</p>
					</div>
				</div>
				<div class="calculator-btn" id="calulate-investment-fees">Calculate</div>
				<h3>Assumptions</h3>
				<ol>
					<li>Annual contributions are added at the end of year as opposed to the beginning of the year</li>
					<li>The average Canadian pays 2.23% a year in investment fees</li>
					<li>The average Canadian starts investing at 32</li>
					<li>The earliest retirement age for Canadians is 65</li>
				</ol>
				<h3>Resources</h3>
				<p class="">
					None of these links are affiliate. Clicking them or signing up does not provide me with any commisions or rewards. Nothing to sell here.
				</p>
				<ol>
					<li>
						<a href="https://www.wealthsimple.com/en-ca/product/invest">Wealthsimple</a> is one of Canada's most cost effective robo-advisors. Great
						For those who want to put their investments on autopilot.
					</li>
					<li>
						<a href="https://www.questrade.com/home">Questrade</a> is one of Canada's most cost effective discount brokerage. Great for those who feel
						confident enough to learn and manage a DIY portfolio.
					</li>
					<li>
						<a href="https://passiv.com/">Passiv</a> is an incredible tool for Canadian DIY investors who don't want to deal with spreadsheets and
						portfolio rebalancing calculations.
					</li>
					<li>
						<a href="https://canadiancouchpotato.com/getting-started/">Canadian Couch Potato</a> is a great starting place for Canadians wanting to
						learn about DIY passive index investing (THE best investment strategy for the average person).
					</li>
				</ol>
			</div>`;
};

export { calc0 };
