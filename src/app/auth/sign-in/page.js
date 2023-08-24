'use client'
import React, {useEffect, useState} from 'react';
import BaseLayout from "../../../../Layout/BaseLayout";
import {useRouter} from "next/navigation";
import {useUser} from "../../../../hooks/useUser";
import axios from "axios";
const router = useRouter()
const SignUp = () => {
    const useUserMutation = useUser();
    const { mutateAsync: createUser } = useUserMutation;
    const [user, setUser] = useState({
        userName: "",
        userPassword: "",
        userEmail: "",
    })

    function handleChange(e) {
        const {name, value} = e.target
        setUser(prevUser => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    const loginUser = async (user) => {
        const res = await axios.post(' http://localhost:4000/login',user)
        return res.data
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await loginUser(user)
        // await router.push('/dashboard')
        setUser('')
    }

    useEffect(() => {
        router.prefetch('/dashboard')
    }, []);


    return (
        <>
            <BaseLayout>
                <div className='h-screen w-full flex flex-col justify-center items-center'>
                    <form method='POST' onSubmit={handleSubmit}
                          className='bg-black w-96 h-96 flex flex-col justify-center items-center rounded-xl'>
                        <div className='text-white text-3xl font-bold'>
                            Login in to your Account
                        </div>

                        <div className='mb-3'>
                            <input type="email" placeholder='Enter Your Email'
                                   onChange={handleChange} name='userEmail'
                                   className='rounded border border-black py-1 px-3'/>
                        </div>
                        <div className='mb-5'>
                            <input type="password" placeholder='Enter Your Password'
                                   onChange={handleChange} name='userPassword'
                                   className='rounded border border-black py-1 px-3'/>
                        </div>
                        <div>
                            <button className='bg-blue-800 text-white rounded px-12 py-1'>Login</button>
                        </div>
                    </form>
                </div>
            </BaseLayout>
        </>
    );
};
export default SignUp;
