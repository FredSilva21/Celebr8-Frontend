import { register} from "@/api/auth";
import { useState } from "react";
import { RegisterProps } from "@/types/user";
import { useRouter } from "expo-router";

export default function useRegister() {
    const [registerData, setRegisterData] = useState<RegisterProps>({ email: "", password: "", name: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const performRegister = async ({ name, email, password }: RegisterProps) => {
        setLoading(true);
        setError(null);
        try {
            const response = await register({ name ,email, password });
            if (response.error) {
                setError(response.error);
                return;
            }

            router.push("/(login)");
        } catch (err) {
            setError("Erro inesperado, tente novamente.");
            console.error("Erro inesperado:", err);
        } finally {
            setLoading(false);
        }
    };

    return { registerData, loading, error, performRegister };
}