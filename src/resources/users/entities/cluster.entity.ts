import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Currency } from './currency.entity';

@Entity()
export class Cluster {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    codenetwork: string;

    @Column({ type: 'varchar', length: 50 })
    code: string;

    @ManyToOne(() => Currency, { nullable: false })
    basecurrid: Currency;

    @Column({ type: 'varchar', length: 25, nullable: true })
    type: string;

    @Column({ type: 'boolean' })
    isactive: boolean;
}
