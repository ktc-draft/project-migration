import { PromoPartner } from './promopartner.entity';
import { PromoTariffPlan } from './promotariffplan.entity';
export declare class PromoCode {
    id: number;
    code: string;
    promopartnerid: PromoPartner;
    promotariffplanid: PromoTariffPlan;
    email: string;
}
