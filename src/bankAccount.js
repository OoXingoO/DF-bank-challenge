export default class BankAccount {

    #balance;
    #transactions;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#transactions = [];
    };

    getBalance() {
        return this.#balance;
    };

    depositMoney(transaction) {
        this.#balance += transaction;
        this.#transactions.push(transaction);
    };

    withdrawMoney(transaction) {
        this.#balance -= transaction;
        this.#transactions.push(transaction);
    };

    addTransactions(transaction) {
        if (transaction.getCredit() > 0) {
            this.#balance += transaction.getCredit();
        } else {
            this.#balance -= transaction.getDebit();
        };

        this.#transactions.push({
            date: transaction.getDate(),
            credit: transaction.getCredit(),
            debit: transaction.getDebit(),
            balance: transaction.getCashBalance(this.#balance)
        });
    };

    getTransactions() {
        return this.#transactions;
    };

}