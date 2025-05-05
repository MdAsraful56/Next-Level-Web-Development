"use strict";
{
    // modifiers
    class BankAcount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        deposit(amount) {
            this.balance = this.balance + amount;
        }
        withdraw(amount) {
            if (this.balance >= amount) {
                this.balance = this.balance - amount;
            }
            else {
                console.log('Insufficient balance');
            }
        }
        getBalance() {
            return this.balance;
        }
    }
    const account01 = new BankAcount(123456, 'Ashraful', 1000);
    console.log(account01);
    account01.name = 'Shanto'; // OK
    // account01.id = 123456; // this is readonly property, so it can't be changed.
    // account01.balance = 1000; // Error: Property 'balance' is private and only accessible within class 'BankAcount'.
    console.log(account01);
    account01.deposit(1000);
    console.log(account01.getBalance()); // 2000
    account01.withdraw(200);
    console.log(account01.getBalance()); // 1800
    account01.withdraw(2000); // Insufficient balance
    // when using private property, we can't access it outside the class.
    // when using protected property, we can access it in the child class.
}
