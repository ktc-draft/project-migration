// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { configService } from './config/config.service';
// import { DataSource } from 'typeorm';
// import { InjectDataSource } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot(configService.getTypeOrmConfig())
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {
//   constructor(
//     @InjectDataSource()
//     private dataSource: DataSource
//   ) {}
// }

import { Module } from '@nestjs/common';
import { databaseProviders } from './config/dataSource';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}