
function getInputId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const totalInputAmount = parseFloat(inputText);
    return totalInputAmount;
}
// калькулятор

document.getElementById('cal-btn').addEventListener('click', function (){

    // доход
    const spend = getInputId('spend');
    // расход
    const coast = getInputId('coast');
    // кредит
    const credit = getInputId('credit');
    // продукты
    const products = getInputId('products');
    // медикаменты
    const medicaments = getInputId('medicaments');
    // проезд
    const travel = getInputId('travel');
    // прочие расходы
    const otherexpenses = getInputId('otherexpenses');

    // потрачено
    const totalExpense = coast + credit + products + medicaments + travel + otherexpenses;
    // потрачено на выходе
    const expense = document.getElementById('expense-output');
    expense.innerText = totalExpense;

    // баланс после расчета
    const totalBalance = spend - totalExpense;
    // баланс на выходе
    const balance = document.getElementById('balance-output');
    balance.innerText = totalBalance;

});