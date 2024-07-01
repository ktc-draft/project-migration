import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cluster } from './cluster.entity';
import { Currency } from './currency.entity';

@Entity('permissions')
export class Permissions {
    @PrimaryColumn()
    clusterid: number;

    @PrimaryColumn()
    currid: number;

    @ManyToOne(() => Cluster, { nullable: false })
    @JoinColumn({ name: 'clusterid' })
    cluster: Cluster;

    @ManyToOne(() => Currency, { nullable: false })
    @JoinColumn({ name: 'currid' })
    currency: Currency;

    @Column({ type: 'boolean' })
    isdisabled: boolean;
}
