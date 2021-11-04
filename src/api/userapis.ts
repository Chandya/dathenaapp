import api from "../api/users";
import { User }from "../api/types"

export const retrieveUsers = async () : Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
}