export default class Transaction {

    #date;
    #credit;
    #debit;
    #cashBalance;

    constructor(date, credit, debit) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
    };

    getDate() {
        return this.#date.toLocaleDateString(`en-GB`)
    };

    getCredit() {
        return this.#credit;
    };

    getDebit() {
        return this.#debit;
    };

    getCashBalance(balance) {
        return this.#cashBalance = balance;
    }

}
