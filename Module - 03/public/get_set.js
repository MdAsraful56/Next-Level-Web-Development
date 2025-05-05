"use strict";
{
    // Getter and setter
    class BankAcount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        get blance() {
            return this._balance;
        }
        ;
        set deposit(amount) {
            if (amount < 0) {
                console.log('Invalid amount');
            }
            else {
                this._balance = this._balance + amount;
            }
        }
    }
    const account01 = new BankAcount(123456, 'Ashraful', 1000);
    console.log(account01);
    account01.deposit = 2000; // OK
    console.log(account01.blance);
}
