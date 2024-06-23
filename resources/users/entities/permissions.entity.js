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
exports.Permissions = void 0;
const typeorm_1 = require("typeorm");
const cluster_entity_1 = require("./cluster.entity");
const currency_entity_1 = require("./currency.entity");
let Permissions = exports.Permissions = class Permissions {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Permissions.prototype, "clusterid", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Permissions.prototype, "currid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cluster_entity_1.Cluster, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'clusterid' }),
    __metadata("design:type", cluster_entity_1.Cluster)
], Permissions.prototype, "cluster", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.Currency, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'currid' }),
    __metadata("design:type", currency_entity_1.Currency)
], Permissions.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Permissions.prototype, "isdisabled", void 0);
exports.Permissions = Permissions = __decorate([
    (0, typeorm_1.Entity)('permissions')
], Permissions);
//# sourceMappingURL=permissions.entity.js.map