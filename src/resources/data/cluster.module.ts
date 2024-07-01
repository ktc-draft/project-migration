// seed.module.ts
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ClusterService } from '../services/cluster.service';
import { Cluster } from '../data/entities/cluster.entity';  // Import your entities
import { ClusterController } from '../controllers/cluster.controller';  // Import your entities


@Module({
  imports: [TypeOrmModule.forFeature([Cluster])],  // Include your entities here
  providers: [ClusterService],
  controllers: [ClusterController]
})
export class ClusterModule {}


