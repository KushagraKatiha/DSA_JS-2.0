class BankAccount {
    #balance = 0; // Private field

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance!");
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        }
    }

    checkBalance() {
        console.log(`Current balance: $${this.#balance}`);
    }
}

// Usage
const account = new BankAccount("Alice");
account.deposit(1000);
account.withdraw(500);
account.checkBalance(); // Current balance: $500
