function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(value) {
      balance += value;
      console.log(`Deposited: ${value}, current Balance: ${balance}`);
    },
    withdraw(value) {
      balance -= value;
      console.log(`Withdraw: ${value}, current Balance: ${balance}`);
    },
    checkBalance() {
      console.log(`Current Balance: ${balance}`);
    },
  };
}

// let user = createBankAccount(100);
// user.deposit(50);
// user.withdraw(100);
// user.checkBalance();

// console.log(user.balance); // undefined

// Write a function called createVendingMachine that uses closures to
// simulate a secure vending machine by hiding its internal data.
// Your outer function should initialize two private variables: a
// running tally of inserted money (starting at zero) and an inventory
// object that tracks the price and stock level of various snacks.
// Instead of allowing direct access to these variables, your function must
// return an object containing two public methods: insertCoin(amount) to add
// funds to the private tally, and buyItem(itemName) to validate the purchase.
// The buyItem method should check if the item exists, if it is currently in
// stock, and if the user has inserted enough money; if all conditions are met,
// it should deduct the item's price from the total money, reduce the stock by
// one, and dispense the item, ensuring that the machine's internal state
// remains completely protected from outside tampering.

function vendingMachine() {
  let insertedValue = 0;
  let inventory = {
    soda: { price: 50, stock: 5 },
    chips: { price: 20, stock: 3 },
  };

  return {
    insertCoin(coin) {
      insertedValue += coin;
      console.log(`Inserted Value: ${insertedValue}`);
    },
    buyItem(item) {
      let itemExist = inventory[item];
      //   console.log(itemExist);
      if (itemExist) {
        if (itemExist.price > insertedValue) {
          console.log("Insert more coins!");
        } else if (itemExist.stock <= 0) {
          console.log("Bhai khatam ho gya sorry!");
        } else {
          insertedValue -= itemExist.price;
          itemExist.stock -= 1;
          console.log("Here is your item!!!!!!");
        }
      }
    },
  };
}

let user = vendingMachine();
user.insertCoin(20);
user.buyItem("soda");
