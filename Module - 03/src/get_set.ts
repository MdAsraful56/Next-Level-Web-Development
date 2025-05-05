{

    // Getter and setter
    class BankAcount {
        constructor(public readonly id: number, public name: string, private _balance: number) {}
    
        get blance() {
            return this._balance;
        };
        set deposit(amount: number) {
            if (amount < 0) {
                console.log('Invalid amount');
            } else {
                this._balance = this._balance + amount;
            }
        }
    }


    const account01 = new BankAcount(123456, 'Ashraful', 1000);
    console.log(account01);
    account01.deposit = 2000; // OK
    console.log(account01.blance);


}