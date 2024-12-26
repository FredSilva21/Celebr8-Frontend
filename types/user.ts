export interface ForgotPasswordProps {
    email: string;
}

export interface LoginProps extends ForgotPasswordProps {
    password: string;
}

export interface RegisterProps extends LoginProps {
    name: string;
}

export interface User extends RegisterProps {
    id: number;
}

export interface TokenProps{
    refreshToken: string;
    accessToken: string;
}

export interface UserFields {
    id: number;
    google_id: string | null;
    name: string;
    email: string;
    password: string;
}