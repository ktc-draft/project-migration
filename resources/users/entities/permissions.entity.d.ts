import { Cluster } from './cluster.entity';
import { Currency } from './currency.entity';
export declare class Permissions {
    clusterid: number;
    currid: number;
    cluster: Cluster;
    currency: Currency;
    isdisabled: boolean;
}
