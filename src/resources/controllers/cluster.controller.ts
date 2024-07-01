import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ApiExtraModels, ApiResponse, ApiBody } from '@nestjs/swagger'
  import { ClusterService } from '../services/cluster.service';
  import { ClusterDto } from '../data/dto/cluster.module';
  
  @Controller('cluster')
  export class ClusterController {
    constructor(private readonly clusterService: ClusterService) {}
  
    @Post('create')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
      @ApiResponse({ status: 403, description: 'Forbidden.'})
      @ApiBody({
         type: ClusterDto,
         description: 'Json structure for user object',
      })
    create(@Body() clusterDto: ClusterDto) {
      return this.clusterService.create(clusterDto);
    }
  }