function setAlarm(employed, vacationing) {
    return employed && !vacationing;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));

function oddNumberCount(number) {
    if (typeof number !== 'number' || number <=
    0 || !Number.isInteger(number)) {
        return 'Invalid input. Please provide a positive interger.';
    }

    let count = 0;
    for (let i = 1; i < number; i += 2) {
        count++;
    }

    return count;
}

console.log(oddNumberCount(10));
console.log(oddNumberCount(15));
console.log(oddNumberCount(5));
console.log(oddNumberCount(-5));

function trollsBeGone(sentence) {
    if (typeof sentence !== 'string') {
        return 'Invalid input. Please provide a sentence as a string.';
    }

    const result = sentence.replace(/[aeiouAEIOU]/g, '');
    
    return result;

}

console.log(trollsBeGone("Trolls are attacking your comment section!"));
console.log(trollsBeGone("Hello, trolls! How are you today?"));
console.log(trollsBeGone(42));

const bankInfo = {
    savings: 1000,
    checking: 1500,
    moneyMarket: -200,
    creditCard: -500
};

function bankAccountSummary(accountInfo) {
    if (typeof accountInfo !== 'object' || accountInfo === null) {
        return 'Invalid input. PLease privide a valid bankInfo object.';
    }

    const total = Object.values(accountInfo).reduce((sum,value) => sum + value, 0);
    return total;
}

const totalBalance = bankAccountSummary(bankInfo);
console.log('Total Bank Account Balance: $$(totalBalance}');

function inTheRed(total) {
    if (typeof total !== 'number') {
        return 'Invalid input. PLease privide a valid number.';
    }
    return total < 0;
}

const isInTheRed = inTheRed(totalBalance);
console.log('Is the account in the red? ${isInTheRed}');

