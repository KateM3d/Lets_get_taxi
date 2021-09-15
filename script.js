const button = document.querySelector('#btn');
const btnTip = document.querySelector('#addTip');

btnTip.addEventListener('click', showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}

button.addEventListener('click', calcAmount);

function calcAmount(e) {
    e.preventDefault();
    let bill = document.querySelector('#bill');
    let people = document.querySelector('#passengers');
    let tip = document.querySelector('#tip').value;
    // if (bill.trim() === "" || people.trim() === "" || people < 1) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Please enter number!',

    //     })
    // }

    if (isValidNumber(bill.value) === false || isValidNumber(people.value) === false || people.value < 1) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number!',

        })
        bill.value = '';
        people.value = '';

    } else {
        let amountPerPerson = bill.value / people.value;
        let tipPerPerson = (bill.value * tip) / people.value;
        let totalPerPerson = amountPerPerson + tipPerPerson;

        document.querySelector('#divBill').textContent = amountPerPerson.toFixed(2);
        document.querySelector('#divTip').textContent = tipPerPerson.toFixed(2);
        document.querySelector('#divTotal').textContent = totalPerPerson.toFixed(2);
    }
}


function isValidNumber(value) {
    let isNotEmpty = value.trim().length !== 0;
    let isNumber = !Number.isNaN(Number(value));
    return isNotEmpty && isNumber;
}