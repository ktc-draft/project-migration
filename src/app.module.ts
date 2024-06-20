import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

// import { TypeOrmModule } from '@nestjs/typeorm';
// import typeOrmConfig from './typeorm.config'; // Путь к вашему конфигурационному файлу

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        // Другие модули вашего приложения
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

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

// import { Module } from '@nestjs/common';
// import { databaseProviders } from './config/dataSource';


// @Module({
//     providers: [...databaseProviders],
//     exports: [...databaseProviders],
// })
// export class DatabaseModule {}