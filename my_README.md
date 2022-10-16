# Bank Challenge  

```  
        ___________________________________
        |#######====================#######|
        |#(10)     *UNITED KINGDOM   *(10)#|
        |#**          /===\   ********  **#|
        |*# {£}      | (") |             #*|
        |#*  ******  | /v\ |    T E N    *#|
        |#(10)        \===/           (10)#|
        |##==========TEN POUND===========##|
        ------------------------------------ 
```    

## Problem Statement  
  
* **Given** a client makes a deposit of 1000 on 10-01-2012   
* **And** a deposit of 2000 on 13-01-2012   
* **And** a withdrawal of 500 on 14-01-2012   
* **When** she prints her bank statement   
* **Then** she would see 

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
---  

## User stories & domain modelling & testing

```  
As a user,  
I want to be able to add money into my bank account,  
So that I can make a deposit.
```   
| Objects     | Properties                    | Messages       | Output  |
| ----------- | ----------------------------- | -------------- | ------- |
| bankAccount | balance@number                | getBalance()   | @number |
|             | accountHistory@Array[@string] | depositMoney() |         |

1. Test to see if default balance is set to 0.
2. Test that each transaction is recorded in accountHistory.
3. Test that amount deposited is correctly added to bankAccount balance.
---
```  
As a user,  
I want to be able to extract money from my bank account,  
So that I can make a withdrawal. 
```  
| Objects     | Properties                    | Messages         | Output  |
| ----------- | ----------------------------- | ---------------- | ------- |
| bankAccount | balance@number                | getBalance()     | @number |
|             | accountHistory@Array[@string] | withdrawtMoney() |         |

1. Test that amount withdrawn is correctly deducted from bankAccount balance.
---
```  
As a user,  
I want to be able to see my activities (amount & date),  
So that I can keep track of all my transactions.  
```  
| Objects      | Properties | Messages    | Output      |
| ------------ | ---------- | ----------- | ----------- |
| transactions |            | getDate()   | @dateString |
|              |            | getCredit() | @number     |
|              |            | getDebit()  | @number     |

1. Test that transaction returns the date in the correct format.
2. Test that when money is added, transaction returns correct credit value.
3. Test that when money is taken out, transaction returns correct debit value.
---
```  
As a user,  
I want to be able to printout my statement,
So that I can show it to others.
```