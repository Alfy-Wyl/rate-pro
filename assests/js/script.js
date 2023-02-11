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

}  



// Add Event Listeners for the Select and Input Elements
baseCurrency.addEventListener('change', calculate);
firstAmount.addEventListener('input', calculate);
compareCurrency.addEventListener('change', calculate);
secondAmount.addEventListener('input', calculate);


// Call the Function Calculate
calculate();