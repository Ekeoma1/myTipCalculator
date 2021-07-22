const billInputEl = document.getElementById('billInput');
const noOfPersonEl = document.getElementById('noOfPerson');
const perPersonTipEl = document.getElementById('perPersonTip');
const totalEl = document.getElementById('total');
const customPercentEl = document.getElementById('customPercent')


function percentCalc(no) {

		let percentRatio = no/100;
		let percentValue = percentRatio * billInputEl.value;
		let amountToBeShared = percentValue / noOfPersonEl.value;

		perPersonTipEl.textContent = amountToBeShared;
		totalEl.textContent = (Number(billInputEl.value) + Number(percentValue))
	
}

function custom() {
	percentCalc(customPercentEl.value)
}

function Reset() {
	totalEl.textContent = "";
	perPersonTipEl.textContent = "";
	billInputEl.value = "";
	noOfPersonEl.value = ""
}




