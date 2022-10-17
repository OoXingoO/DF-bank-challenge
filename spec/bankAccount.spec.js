import BankAccount from "../src/bankAccount.js";

describe(`Bank Account tests`, () => {
    let testAccount;

    beforeEach(() => {
        testAccount = new BankAccount();
    });

    afterEach(() => {
        testAccount = undefined;
    });

    it(`should have a default balance of 0`, () => {
        //Arrange
        //Act
        const actual = testAccount.getBalance();
        //Assert
        expect(actual).toBe(0);

    });

    it(`should add to balance if deposit is made`, () => {
        //Arrange
        //Act
        testAccount.depositMoney(1000);
        const actual = testAccount.getBalance();
        // //Assert
        expect(actual).toBe(1000);
    });

    it(`should deduct from balance if withdrawal is made`, () => {
        //Arrange
        testAccount = new BankAccount(1000);
        //Act
        testAccount.withdrawMoney(500);
        const actual = testAccount.getBalance();
        //Assert
        expect(actual).toBe(500);
    });

    it(`each transactions are recorded into the account history`, () => {
        //Arrange
        //Act
        testAccount.depositMoney(500);
        testAccount.withdrawMoney(100);
        //Assert
        expect(testAccount.getTransactions().length).toBe(2);
    });

})