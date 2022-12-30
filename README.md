DF Bank Challenge
=================
```
        ____________________________________
        |#######====================#######|
        |#(10)     *UNITED KINGDOM   *(10)#|
        |#**          /===\   ********  **#|
        |*# {£}      | (") |             #*|
        |#*  ******  | /v\ |    T E N    *#|
        |#(10)        \===/           (10)#|
        |##==========TEN POUND===========##|
        ------------------------------------ 
```
About the project
-------
Using object-oriented programming and test-driven development (creating user stories followed by testings and finally source code) to setup a bank account which is able to print given transactions in a specific format (see below).

### Task Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
### Getting started
-------
- `npm install` → installs project dependencies.
- `npm test` → run the tests.

#### Project approaches
Check out [myREADME](https://github.com/OoXingoO/DF-bank-challenge/blob/main/my_README.md) for more details.

Built with
-------
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Jasmine](https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white)

Self-review
------
#### What have I learnt
- Using encapsulation in a class.
- Using Jasmine framework for testing and exploring with different matchers.
- Using getters & setters method to access private properties of a class.

#### What could I do differently?
- Could break down printStatement() function into smaller methods - *one for printing the header of the statement and another to print each row of the statement for example*
- Could conduct more testings and make use of a more variety of Jasmine matchers.

#### What additional.enhance features could I add to develop further?
- Printing statement in different colours - *e.g. red for debit, green for credit*.
