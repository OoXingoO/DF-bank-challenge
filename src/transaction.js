export default class Transaction {

    #date;
    #credit;
    #debit;

    constructor(date, credit, debit) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
    };

    getDate() {
        return this.#date.toLocaleDateString()
    };

    getCredit() {
        return this.#credit;
    };

    getDebit() {
        return this.#debit;
    };

}
