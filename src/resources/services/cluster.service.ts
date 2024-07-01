import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cluster } from '../data/entities/cluster.entity';
import { Currency } from '../data/entities/currency.entity';
import { ClusterDto } from '../data/dto/cluster.module';


@Injectable()
export class ClusterService {
  constructor(
    @InjectRepository(Cluster)
    private readonly clusterRepository: Repository<Cluster>
  ) {}

  async create(clusterDto: ClusterDto) {

    const cluster = new Cluster();
    //cluster.basecurr_id = clusterDto.basecurrid;
    cluster.code = clusterDto.code;
    cluster.codenetwork = clusterDto.codenetwork;
    cluster.isactive = clusterDto.isactive;
    cluster.type = clusterDto.type;

    await this.clusterRepository.save(cluster);
  }
}