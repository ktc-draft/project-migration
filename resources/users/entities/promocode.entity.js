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
exports.PromoCode = void 0;
const typeorm_1 = require("typeorm");
const promopartner_entity_1 = require("./promopartner.entity");
const promotariffplan_entity_1 = require("./promotariffplan.entity");
let PromoCode = exports.PromoCode = class PromoCode {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PromoCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PromoCode.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promopartner_entity_1.PromoPartner, { nullable: false }),
    __metadata("design:type", promopartner_entity_1.PromoPartner)
], PromoCode.prototype, "promopartnerid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promotariffplan_entity_1.PromoTariffPlan, { nullable: false }),
    __metadata("design:type", promotariffplan_entity_1.PromoTariffPlan)
], PromoCode.prototype, "promotariffplanid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PromoCode.prototype, "email", void 0);
exports.PromoCode = PromoCode = __decorate([
    (0, typeorm_1.Entity)()
], PromoCode);
//# sourceMappingURL=promocode.entity.js.map