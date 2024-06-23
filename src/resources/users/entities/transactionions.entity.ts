import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { CryptoWallet } from './cryptowallet.entity';
import { LoginUser } from './loginuser.entity';

@Entity('transactioninfo')
export class TransactionInfo {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    transactionid: number;

    @ManyToOne(() => Transaction, { nullable: false })
    @JoinColumn({ name: 'transactionid' })
    transaction: Transaction;

    @Column({ type: 'varchar', length: 255 })
    incaccount: string;

    @Column({ type: 'jsonb', nullable: true })
    incaccountdata: object;

    @Column({ type: 'varchar', length: 255 })
    outaccount: string;

    @Column({ type: 'jsonb', nullable: true })
    outaccountdata: object;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({ type: 'numeric', precision: 10, scale: 10, nullable: true })
    rate: number;

    @ManyToOne(() => CryptoWallet, { nullable: true })
    @JoinColumn({ name: 'cryptowalletid' })
    cryptowallet: CryptoWallet;

    @ManyToOne(() => LoginUser, { nullable: false })
    @JoinColumn({ name: 'userid' })
    user: LoginUser;
}
