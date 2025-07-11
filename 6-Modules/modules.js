"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = require("./payment");
const payment_2 = __importDefault(require("./payment"));
(0, payment_1.addPayment)(12);
let a = new payment_2.default("anxj");
let b = new payment_2.default("enjej");
console.log(a, b);
