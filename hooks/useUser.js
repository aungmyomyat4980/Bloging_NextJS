import {useMutation} from "@tanstack/react-query";
import {createUser} from "../apis/user";

const useUserMutation = () => {
    return useMutation({
        mutationKey : ['post','users'],
        mutationFn : createUser
    })
}

export const useUser = () => {
    return {
        useUserMutation,
    }
}
