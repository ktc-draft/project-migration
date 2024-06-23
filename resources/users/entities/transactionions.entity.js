"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInfo = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
const cryptowallet_entity_1 = require("./cryptowallet.entity");
const loginuser_entity_1 = require("./loginuser.entity");
let TransactionInfo = exports.TransactionInfo = class TransactionInfo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], TransactionInfo.prototype, "transactionid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.Transaction, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'transactionid' }),
    __metadata("design:type", transaction_entity_1.Transaction)
], TransactionInfo.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TransactionInfo.prototype, "incaccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], TransactionInfo.prototype, "incaccountdata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TransactionInfo.prototype, "outaccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], TransactionInfo.prototype, "outaccountdata", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TransactionInfo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], TransactionInfo.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cryptowallet_entity_1.CryptoWallet, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'cryptowalletid' }),
    __metadata("design:type", cryptowallet_entity_1.CryptoWallet)
], TransactionInfo.prototype, "cryptowallet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loginuser_entity_1.LoginUser, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'userid' }),
    __metadata("design:type", loginuser_entity_1.LoginUser)
], TransactionInfo.prototype, "user", void 0);
exports.TransactionInfo = TransactionInfo = __decorate([
    (0, typeorm_1.Entity)('transactioninfo')
], TransactionInfo);
//# sourceMappingURL=transactionions.entity.js.map