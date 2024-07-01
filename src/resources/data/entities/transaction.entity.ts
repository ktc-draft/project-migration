import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Currency } from './currency.entity';
import { Cluster } from './cluster.entity';
import { OpTypes } from './optypes.entity';

@Entity('transaction')
export class Transaction {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'date' })
    datestart: string;

    @Column({ type: 'date' })
    datefinish: string;

    @ManyToOne(() => Currency, { nullable: false })
    inccurrid: Currency;

    @ManyToOne(() => Cluster, { nullable: false })
    incclasterid: Cluster;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    incsum: number;

    @ManyToOne(() => Currency, { nullable: false })
    outcurrid: Currency;

    @ManyToOne(() => Cluster, { nullable: false })
    outclasterid: Cluster;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    outsum: number;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    feepaysystem: number;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    feenetwork: number;

    @ManyToOne(() => Currency, { nullable: true })
    feecurrencyid: Currency;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    finalsum: number;

    @ManyToOne(() => OpTypes, { nullable: false })
    optypeid: OpTypes;
}
