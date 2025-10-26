/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance = balance;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if(this.withdraw(account1,money)){
        if(this.deposit(account2,money)) return true;
        else{
            this.deposit(account1,money);
            return false;
        }
    }
    
    return false;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if(account < 1 || account > this.balance.length) return false;
    
    this.balance[account-1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if(account < 1 || account > this.balance.length) return false;
    if(this.balance[account-1] < money) return false;

    this.balance[account-1] -= money;
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */