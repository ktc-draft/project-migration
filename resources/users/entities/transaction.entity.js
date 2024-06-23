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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const currency_entity_1 = require("./currency.entity");
const cluster_entity_1 = require("./cluster.entity");
const optypes_entity_1 = require("./optypes.entity");
let Transaction = exports.Transaction = class Transaction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Transaction.prototype, "datestart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Transaction.prototype, "datefinish", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.Currency, { nullable: false }),
    __metadata("design:type", currency_entity_1.Currency)
], Transaction.prototype, "inccurrid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cluster_entity_1.Cluster, { nullable: false }),
    __metadata("design:type", cluster_entity_1.Cluster)
], Transaction.prototype, "incclasterid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "incsum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.Currency, { nullable: false }),
    __metadata("design:type", currency_entity_1.Currency)
], Transaction.prototype, "outcurrid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cluster_entity_1.Cluster, { nullable: false }),
    __metadata("design:type", cluster_entity_1.Cluster)
], Transaction.prototype, "outclasterid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "outsum", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "feepaysystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "feenetwork", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.Currency, { nullable: true }),
    __metadata("design:type", currency_entity_1.Currency)
], Transaction.prototype, "feecurrencyid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 10, nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "finalsum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => optypes_entity_1.OpTypes, { nullable: false }),
    __metadata("design:type", optypes_entity_1.OpTypes)
], Transaction.prototype, "optypeid", void 0);
exports.Transaction = Transaction = __decorate([
    (0, typeorm_1.Entity)('transaction')
], Transaction);
//# sourceMappingURL=transaction.entity.js.map