export default class transactions {

    #date;
    #transactionType;
    #amount;

    constructor(date = new Date(), amount, transactionType) {
        this.#date = date;
        this.#transactionType = transactionType;
        this.#amount = amount;
    };

    getDate() {
        return this.#date.toLocaleDateString()
    };

    getTransactionType() {
        if (this.#amount > 0) {
            this.#transactionType = "credit";
            return this.#transactionType;
        };
        this.#transactionType = "debit";
        return this.#transactionType;
    };

    getAmount() {
        return this.#amount;
    };

};


