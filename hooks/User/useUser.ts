import { useEffect, useState } from "react";
import { getUser } from "@/api/users";
import { UserFields } from "@/types/user";
import { getData } from "@/storage/secureStorage";

export default function useUser() {
    const [user, setUser] = useState<UserFields>();

    useEffect(() => {
        const fetchUser = async () => {
            const token = await getData('access_token');
            const user_id = await getData('user_id');
           
            if (token && user_id) {
                const user = await getUser(user_id,token);
                setUser(user);
            }
        };
        fetchUser();
    }, []);

    return user;
}