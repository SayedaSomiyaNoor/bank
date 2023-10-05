/*
1. add event handler with the withdraw button
2. get the withdraw amount field from the withdraw input field
2.5 also make sure to convert the input a number by using parseFloat
3. get previous withdraw Total
4.calculate total withdrawAmount
4.5 set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6.5 get the new balance total
7. clear the input field
*/
//step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousTotalWithdrawString);
    //step-4
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=currentWithdrawTotal;
    //step-5
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    //step-6
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;
    //step-7
    withdrawField.value= '';
})