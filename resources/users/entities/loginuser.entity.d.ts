import { AuthProvider } from './authprovider.entity';
import { PromoCode } from './promocode.entity';
export declare class LoginUser {
    id: string;
    email: string;
    adddata: object;
    auth_provider_id: AuthProvider;
    promocodeid: PromoCode;
}
