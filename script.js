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
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#passengers').value;
    const tip = document.querySelector('#tip').value;
    if (bill.trim() === "" || people.trim() === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter number!',

        })
    }

    let amountPerPerson = bill / people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = amountPerPerson + tipPerPerson;

    document.querySelector('#divBill').textContent = amountPerPerson.toFixed(2);
    document.querySelector('#divTip').textContent = tipPerPerson.toFixed(2);
    document.querySelector('#divTotal').textContent = totalPerPerson.toFixed(2);
}