import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AuthProvider } from './authprovider.entity';
import { PromoCode } from './promocode.entity';

@Entity()
export class LoginUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({ type: 'jsonb', nullable: true })
    adddata: object;

    @ManyToOne(() => AuthProvider, { nullable: false })
    auth_provider_id: AuthProvider;

    @ManyToOne(() => PromoCode, { nullable: true })
    promocodeid: PromoCode;
}
