import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PromoPartner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;

    @Column({ type: 'jsonb', nullable: true })
    adddata: object;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;
}
