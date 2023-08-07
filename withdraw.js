function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}



function getElementValueById (elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}




function setTextElementValueById ( elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}



document.getElementById('btn-Withdraw').addEventListener('click',function(){


    const newWithdrawAmount = getInputFieldValueById('Withdraw-field');


    const previousWithdrawTotal =getElementValueById('withdraw-total');


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total',newWithdrawTotal);


    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal)
})