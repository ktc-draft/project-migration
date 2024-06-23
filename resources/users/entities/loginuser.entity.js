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
exports.LoginUser = void 0;
const typeorm_1 = require("typeorm");
const authprovider_entity_1 = require("./authprovider.entity");
const promocode_entity_1 = require("./promocode.entity");
let LoginUser = exports.LoginUser = class LoginUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LoginUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LoginUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], LoginUser.prototype, "adddata", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => authprovider_entity_1.AuthProvider, { nullable: false }),
    __metadata("design:type", authprovider_entity_1.AuthProvider)
], LoginUser.prototype, "auth_provider_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promocode_entity_1.PromoCode, { nullable: true }),
    __metadata("design:type", promocode_entity_1.PromoCode)
], LoginUser.prototype, "promocodeid", void 0);
exports.LoginUser = LoginUser = __decorate([
    (0, typeorm_1.Entity)()
], LoginUser);
//# sourceMappingURL=loginuser.entity.js.map