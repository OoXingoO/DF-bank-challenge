import Statement from "../src/statement.js";

describe(`Bank Statement tests`, () => {
    let testTransaction;

    beforeEach(() => {
        testTransaction = new Statement()
    });

    afterEach(() => {
        testTransaction = undefined;
    })

    const mockTransactions = [{ date: "10/01/2012", credit: 1000, debit: 0, balance: 1000 }, { date: "13/01/2012", credit: 2000, debit: 0, balance: 3000 }, { date: "14/01/2012", credit: 0, debit: 500, balance: 2500 }];

    it(`should correctly log all transactions made`, () => {
        //Arrange
        const mockTransactionSpy = spyOn(console, 'log');
        //Act
        Statement.printStatement(mockTransactions)
        //Assert
        expect(mockTransactionSpy).toHaveBeenCalledTimes(mockTransactions.length + 1);
    });
})