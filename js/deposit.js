//add even listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount from the deposit input field
    //for input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3: get the current deposit total
    // for non input use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositTotal=newDepositAmount+previousDepositTotal;
    depositTotalElement.innerText=newDepositTotal;


    depositField.value='';
})