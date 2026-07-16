export interface Users {
    IdUser?:number | null;
    Fullname?: string | null;
    Email?: string | null;
    Password?: string | null;
    WalletId?: string | null;
}
export interface UserRequest {
    Email: string;
    Password: string;
}