import { Transaction } from './transaction.entity';
import { CryptoWallet } from './cryptowallet.entity';
import { LoginUser } from './loginuser.entity';
export declare class TransactionInfo {
    transactionid: number;
    transaction: Transaction;
    incaccount: string;
    incaccountdata: object;
    outaccount: string;
    outaccountdata: object;
    email: string;
    rate: number;
    cryptowallet: CryptoWallet;
    user: LoginUser;
}
