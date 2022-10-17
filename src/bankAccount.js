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

    depositMoney(credit) {
        if (credit <= 0) {
            throw new Error('Please enter a valid amount')
        }
        this.#balance += credit;
        this.#transactions.push(credit);
    };

    withdrawMoney(debit) {
        if (this.#balance < debit) {
            throw new Error('Insufficient balance')
        }
        this.#balance -= debit;
        this.#transactions.push(debit);
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