import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PromoPartner } from './promopartner.entity';
import { PromoTariffPlan } from './promotariffplan.entity';

@Entity()
export class PromoCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    code: string;

    @ManyToOne(() => PromoPartner, { nullable: false })
    promopartnerid: PromoPartner;

    @ManyToOne(() => PromoTariffPlan, { nullable: false })
    promotariffplanid: PromoTariffPlan;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;
}
