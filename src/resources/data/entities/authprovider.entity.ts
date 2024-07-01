import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AuthProvider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', default: true })
    is_enabled: boolean;

    @Column({ type: 'varchar', length: 20, unique: true })
    provider_name: string;
}
