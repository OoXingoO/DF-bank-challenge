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
        //Assert
        expect(actual).toBe(1000);
    });

    it(`should return an error when deposit is less than or equal to 0`, () => {
        //Arrange
        //Act
        //Assert
        expect(() => { testAccount.depositMoney(0) }).toThrowError('Please enter a valid amount');
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

    it(`should return an error if withdrawal amount is more than balance`, () => {
        //Arrange
        //Act
        testAccount = new BankAccount(800);
        //Assert
        expect(() => { testAccount.withdrawMoney(1000) }).toThrowError('Insufficient balance');
    })

    it(`each transactions are recorded into the account history`, () => {
        //Arrange
        //Act
        testAccount.depositMoney(500);
        testAccount.withdrawMoney(100);
        //Assert
        expect(testAccount.getTransactions().length).toBe(2);
    });

})