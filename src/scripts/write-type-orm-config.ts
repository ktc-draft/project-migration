import { configService } from '../config/config.service';
import { databaseProviders } from '../config/dataSource';

import fs = require('fs');
fs.writeFileSync('ormconfig.json',
 JSON.stringify(configService.getTypeOrmConfig(), null, 2)
);