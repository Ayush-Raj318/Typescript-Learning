"use strict";
class Payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
// is class se hume kuch instance nhi banana  hai, ye bas ek base data hai or either essentials hai
//kyonki payment ko har jagah use krneg code me
// issse bas inherit krna hai
class Pay extends Payment {
}
