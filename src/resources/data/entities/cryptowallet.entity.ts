import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CryptoWallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    label: string;
}
