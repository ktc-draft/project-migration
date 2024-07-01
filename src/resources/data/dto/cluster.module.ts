import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ClusterDto {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the entity' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({ description: 'The code network of the entity', type: String, maxLength: 255 })
  codenetwork: string;

  @Column({ type: 'varchar', length: 50 })
  @ApiProperty({ description: 'The code of the entity', type: String, maxLength: 50 })
  code: string;

  @Column({ nullable: false })
  @ApiProperty({ description: 'The base currency id'})
  basecurrid: number;

  @Column({ type: 'varchar', length: 25, nullable: true })
  @ApiProperty({ description: 'The type of the entity', type: String, maxLength: 25, nullable: true })
  type: string;

  @Column({ type: 'boolean' })
  @ApiProperty({ description: 'Indicates whether the entity is active', type: Boolean })
  isactive: boolean;
}