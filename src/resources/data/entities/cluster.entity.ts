import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Currency } from './currency.entity';

@Entity()
export class Cluster {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    codenetwork: string;

    @Column({ type: 'varchar', length: 50 })
    code: string;

    //@ManyToOne(type => Currency,{ nullable: false })
   // @JoinColumn({ name: "basecurrid" })

    @ManyToOne(type => Currency,{ nullable: false })
    @JoinColumn({ name: "basecurr_id", referencedColumnName: "id" })
    basecurr: Currency;

    @Column({ type: 'varchar', length: 25, nullable: true })
    type: string;

    @Column({ type: 'boolean' })
    isactive: boolean;

    @Column()
    public basecurr_id: number;
}
