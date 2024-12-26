import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getData, storeToken } from "@/storage/secureStorage";

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = await getData("access_token");
                if (!token) {
                    setIsAuthenticated(false);
                    router.push("/(login)");
                    return;
                }
                setIsAuthenticated(true);
            } catch (err) {
                setError("Erro inesperado, tente novamente.");
                console.error("Erro inesperado:", err);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    return { isAuthenticated, loading, error, setIsAuthenticated };
}