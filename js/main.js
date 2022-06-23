
function getInputId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const totalInputAmount = parseFloat(inputText);
    return totalInputAmount;
}
// �����������

document.getElementById('cal-btn').addEventListener('click', function (){

    // �����
    const spend = getInputId('spend');
    // ������
    const coast = getInputId('coast');
    // ������
    const credit = getInputId('credit');
    // ��������
    const products = getInputId('products');
    // �����������
    const medicaments = getInputId('medicaments');
    // ������
    const travel = getInputId('travel');
    // ������ �������
    const otherexpenses = getInputId('otherexpenses');

    // ���������
    const totalExpense = coast + credit + products + medicaments + travel + otherexpenses;
    // ��������� �� ������
    const expense = document.getElementById('expense-output');
    expense.innerText = totalExpense;

    // ������ ����� �������
    const totalBalance = spend - totalExpense;
    // ������ �� ������
    const balance = document.getElementById('balance-output');
    balance.innerText = totalBalance;

});