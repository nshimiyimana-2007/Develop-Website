
 
  const exchangeRates = {
     RWF: 1,
      USD: 0.00080,  // 1 RWF = 0.0008 USD
      GBP: 0.00063,
      KES: 0.11,
      JPY: 0.12,
      CNY: 0.0058,
  };

  function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const resultElement = document.getElementById("result");

      if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please enter a valid amount.";
        return;
      }

      // Convert to RWF first
      const amountInRWF = amount / exchangeRates[from];
      // Then convert from RWF to target currency
      const converted = amountInRWF * exchangeRates[to];

      resultElement.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    }
  
