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


document.getElementById('btn-deposit').addEventListener('click',function(){


    const newDepositAmount = getInputFieldValueById('deposit-field');


    const previousDepositTotal =getElementValueById('deposit-total');


    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total',newDepositTotal);


    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal)
})