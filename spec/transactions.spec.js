import Transaction from "../src/transaction.js";

describe(`Transaction tests`, () => {
    let testTransaction;

    afterEach(() => {
        testTransaction = undefined;
    });

    it(`should show date of transaction`, () => {
        //Arrange
        const testTransaction = new Transaction(new Date("01/13/2012"), 2000);
        //Act
        const actual = testTransaction.getDate();
        //Assert
        expect(actual).toBe("13/01/2012");
    });

    it(`should return correct credit value`, () => {
        //Arrange
        const testTransaction = new Transaction(new Date("01/13/2012"), 2000, 0)
        //Act
        const actual = testTransaction.getCredit();
        //Assert
        expect(actual).toBe(2000)
    });

    it(`should return correct debit value`, () => {
        //Arrange
        const testTransaction = new Transaction(new Date("01/14/2012"), 0, 500)
        //Act
        const actual = testTransaction.getDebit();
        //Assert
        expect(actual).toBe(500);
    });

})