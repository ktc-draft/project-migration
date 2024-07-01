import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Currency {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    label: string;

    @Column({ type: 'varchar', length: 50 })
    code: string;

    @Column({ type: 'smallint', nullable: true })
    precision: number;

    @Column({ type: 'numeric', precision: 15, scale: 6, nullable: true })
    minsumbuy: number;

    @Column({ type: 'numeric', precision: 15, scale: 6, nullable: true })
    minsumsell: number;

    @Column({ type: 'numeric', precision: 15, scale: 6, nullable: true })
    maxsumbuy: number;

    @Column({ type: 'numeric', precision: 15, scale: 6, nullable: true })
    maxsumsell: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    addressregex: string;

    @Column({ type: 'boolean' })
    isactive: boolean;
}