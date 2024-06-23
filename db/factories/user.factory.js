"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const user_entity_1 = require("../../resources/users/entities/user.entity");
exports.default = (0, typeorm_extension_1.setSeederFactory)(user_entity_1.User, (faker) => {
    const user = new user_entity_1.User();
    const sexFlag = faker.number.int(1);
    const sex = sexFlag ? 'male' : 'female';
    user.firstName = faker.person.firstName(sex);
    user.lastName = faker.person.lastName(sex);
    user.email = faker.internet.email({
        firstName: user.firstName,
        lastName: user.lastName,
    });
    return user;
});
//# sourceMappingURL=user.factory.js.map