"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../resources/users/entities/user.entity");
class UserSeeder {
    async run(dataSource, factoryManager) {
        await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');
        const repository = dataSource.getRepository(user_entity_1.User);
        await repository.insert([
            {
                firstName: 'Mazedul',
                lastName: 'Islam',
                email: 'mazidmailbox@gmail.com',
            },
        ]);
        const userFactory = factoryManager.get(user_entity_1.User);
        await userFactory.save();
        await userFactory.saveMany(5);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=user.seeder.js.map