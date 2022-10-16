import transactions from "../src/transactions.js";

describe(`Transaction tests`, () => {
    let testTransactions;

    afterEach(() => {
        testTransactions = undefined;
    });

    it(`should show date of transaction`, () => {
        //Arrange
        const testTransactions = new transactions(new Date("01/13/2012"), 2000);
        //Act
        const actual = testTransactions.getDate();
        //Assert
        expect(actual).toBe("13/01/2012");
    });

    it(`should return credit if deposit is made`, () => {
        //Arrange
        const testTransactions = new transactions(new Date("01/13/2012"), 2000)
        //Act
        const actual = testTransactions.getTransactionType();
        //Assert
        expect(actual).toBe("credit")
    });

    it(`should return debit if withdrawal is made`, () => {
        //Arrange
        const testTransactions = new transactions(new Date("01/14/2012"), -500)
        //Act
        const actual = testTransactions.getTransactionType();
        //Assert
        expect(actual).toBe("debit");
    });

    it(`should show correct amount of transactions`, () => {
        //Arrange
        const testTransactions = new transactions(new Date("01/10/2013"), 1000, "credit")
        //Act
        const actual = testTransactions.getAmount();
        //Assert
        expect(actual).toBe(1000);
    });
})