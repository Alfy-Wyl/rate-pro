// Declare Variables for UI elements
const baseCurrency = document.getElementById('first-currency');
const firstAmount = document.getElementById('first-amount');
const compareCurrency = document.getElementById('second-currency');
const secondAmount = document.getElementById('second-amount');
const switchEl = document.getElementById('switch');
const exchangeRate = document.getElementById('exchange-rate');

// Function to Fetch Exchange Rate from API
function calculate () {

    // Set Variables to get the values of base currency and compared currency
    const first_currency = baseCurrency.value;
    const second_currency = compareCurrency.value;

    // Make Request to API using Fetch
    fetch(`https://v6.exchangerate-api.com/v6/533467798b5009e17d6d3a8e/latest/${first_currency}`)
        .then(response => response.json()) 
        .then(forex => {
            const rate = forex.conversion_rates[second_currency]; 
            
            // Display Exchange Rate Element with a Default of 1
            exchangeRate.innerText = `1 ${first_currency} = ${rate} ${second_currency}`;

            // Set Amount Element to Display Actual Exchange Rate in 2 Decimal Places
            secondAmount.value = (firstAmount.value * rate).toFixed(2);

           
            // Store in Local Storage
            storeResultInLocalStorage(secondAmount.value);
        })

} 


// Function to Assess and Store Result to Local Storage 
function storeResultInLocalStorage(rate) {
    let rateResult;
    if(localStorage.getItem('rateResult') === null){
        rateResult = [];
    } else {
        rateResult = JSON.parse(localStorage.getItem('rateResult'));
    }

    rateResult.push(rate);

    localStorage.setItem('rateResult', JSON.stringify(rateResult));


}


// Add Event Listeners for the Select and Input Elements
baseCurrency.addEventListener('change', calculate);
firstAmount.addEventListener('input', calculate);
compareCurrency.addEventListener('change', calculate);
secondAmount.addEventListener('input', calculate);

// Create an Event Listener for the Switch Button
// Add a Function to enable Switch between the Two Currencies
switchEl.addEventListener('click', () => {
    const swap = baseCurrency.value;
    baseCurrency.value = compareCurrency.value;
    compareCurrency.value = swap;
    calculate(); 

})


// Call the Function Calculate
calculate();