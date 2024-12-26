import { login } from "@/api/auth";
import { useState } from "react";
import { LoginProps, TokenProps } from "@/types/user";
import { storeToken } from "@/storage/secureStorage";
import { useRouter } from "expo-router";
import useAuth from "./useAuth";

export default function useLogin() {
    const [token, setToken] = useState<TokenProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { setIsAuthenticated } = useAuth();
    const router = useRouter();

    const performLogin = async ({ email, password }: LoginProps) => {
        setLoading(true);
        setError(null);
        try {
            const response = await login({ email, password });
            if (response.error) {
                setError(response.error);
                return;
            }
            await storeToken("refresh_token",response.result.refreshToken);
            await storeToken("access_token",response.result.accessToken);
            await storeToken("user_id",JSON.stringify(response.result.user_id));
            setIsAuthenticated(true);
            router.push("/event");
        } catch (err) {
            setError("Erro inesperado, tente novamente.");
            console.error("Erro inesperado:", err);
        } finally {
            setLoading(false);
        }
    };

    return { token, loading, error, performLogin };
}