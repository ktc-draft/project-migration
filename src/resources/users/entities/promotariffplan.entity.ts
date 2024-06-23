import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PromoTariffPlan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', nullable: true })
    isactive: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    label: string;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    rate: number;
}
