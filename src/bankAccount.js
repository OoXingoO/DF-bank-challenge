export default class bankAccount {

    #balance;
    #accountHistory;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#accountHistory = [];
    };

    getBalance() {
        return this.#balance;
    };

    depositMoney(amount) {
        this.#balance += amount;
        this.#accountHistory.push(amount);
    }

    withdrawMoney(amount) {
        this.#balance -= amount;
        this.#accountHistory.push(amount);
    }

    getAccountHistory() {
        return this.#accountHistory;

    }

}