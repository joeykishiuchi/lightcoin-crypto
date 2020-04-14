// let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  } 
  get balance() {
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    if (transaction.isAllowed()) {
      this.transactions.push(transaction);
    }
  }
};

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
    this.account.addTransaction(this);
    }
  }

  isAllowed() {
      return this.account.balance + this.value >= 0;
  }
};

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
};

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
};




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Deposit(50, myAccount);
t1.commit();
console.log(myAccount) 
t2 = new Withdrawal(60, myAccount);
t2.commit();
t1 = new Deposit(50, myAccount);
t1.commit();
t2 = new Withdrawal(60, myAccount);
t2.commit();
t2 = new Withdrawal(60, myAccount);
t2.commit();
console.log(myAccount) 
console.log(myAccount)