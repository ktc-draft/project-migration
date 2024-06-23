import { Currency } from './currency.entity';
import { Cluster } from './cluster.entity';
import { OpTypes } from './optypes.entity';
export declare class Transaction {
    id: number;
    datestart: string;
    datefinish: string;
    inccurrid: Currency;
    incclasterid: Cluster;
    incsum: number;
    outcurrid: Currency;
    outclasterid: Cluster;
    outsum: number;
    feepaysystem: number;
    feenetwork: number;
    feecurrencyid: Currency;
    finalsum: number;
    optypeid: OpTypes;
}
