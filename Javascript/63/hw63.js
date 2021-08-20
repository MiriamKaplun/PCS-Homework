(function () {
    'use strict';

    function createAccount(openingBalance) {
        return {
            balance: openingBalance,
            performTransaction: function (amount) {
                this.balance = this.balance += amount;
            }
        };
    }

    function transaction(amount) {
        this.balance += amount;
    }

    const account1 = createAccount(100);
    const account2 = createAccount(200);

    console.log(account1.balance);
    account1.performTransaction(50);
    console.log(account1.balance);

    console.log(account2.balance);
    account2.performTransaction(70);
    console.log(account2.balance);

    transaction.call(account1, 100);
    console.log(account1.balance);
}());

