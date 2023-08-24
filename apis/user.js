import axios from "axios";

export const createUser = async (user) => {
    try {
        console.table(user)
        const res = await axios.post('http://localhost:3000/users', user);
        return res.data;
    } catch (error) {
        // Handle error appropriately, e.g., by throwing or returning an error message
        throw new Error('Failed to create user: ' + error.message);
    }
};