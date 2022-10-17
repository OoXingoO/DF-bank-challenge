import BankAccount from "./src/bankAccount.js";
import Transaction from "./src/transaction.js";
import Statement from "./src/statement.js";

const account = new BankAccount();
const transactions1 = new Transaction(new Date(2012, 0, 10), 1000, 0);
const transactions2 = new Transaction(new Date(2012, 0, 13), 2000, 0);
const transactions3 = new Transaction(new Date(2012, 0, 14), 0, 500);

account.addTransactions(transactions1);
account.addTransactions(transactions2);
account.addTransactions(transactions3);

Statement.printStatement(account.getTransactions())