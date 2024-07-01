import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/data/users.module';
import { DbModule } from './db/db.module';
import { ClusterModule } from './resources/data/cluster.module';

@Module({
  imports: [UsersModule, DbModule, ClusterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
