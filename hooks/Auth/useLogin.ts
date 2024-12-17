import { login } from "@/api/auth";
import { useState } from "react";
import { LoginProps, TokenProps } from "@/types/user";
import { storeData, clearAllData } from "@/storage/storage";
import { useRouter } from "expo-router";

export default function useLogin() {
    const [token, setToken] = useState<TokenProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
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

            setToken(response.result);
            storeData("accessToken", response.result.accessToken);
            storeData("refreshToken", response.result.refreshToken);
            storeData("user_id", response.result.user_id);
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