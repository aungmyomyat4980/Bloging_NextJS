'use client'
import React, {useState} from 'react';
import BaseLayout from "../../../../Layout/BaseLayout";
import axios from "axios";
import {data} from "autoprefixer";
import {useMutation} from "@tanstack/react-query";

const SignUp = () => {
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

    const createUser = async (user) => {
        try {
            const res = await axios.post('http://localhost:3000/user',user);
            return res.data;
        } catch (error) {
            // Handle error appropriately, e.g., by throwing or returning an error message
            throw new Error('Failed to create user: ' + error.message);
        }
    };

    const {mutateAsync} = useMutation({
        mutationKey : ['post','user'],
        mutationFn : createUser
    })

    async function handleSubmit() {
        await mutateAsync(user)
    }

    return (
        <>
            <BaseLayout>
                <div className='h-screen w-full flex flex-col justify-center items-center'>
                    <form method='POST' onSubmit={handleSubmit}
                          className='bg-black w-96 h-96 flex flex-col justify-center items-center rounded-xl'>
                        <div className='text-white text-3xl font-bold'>
                            Sign Up Here
                        </div>
                        <div className='mb-3 mt-6'>
                            <input type="text" placeholder='Enter Your Name'
                                   onChange={handleChange} name='userName'
                                   className='rounded border border-black px-3 py-1'/>
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
                            <button className='bg-blue-800 text-white rounded px-12 py-1'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </BaseLayout>
        </>
    );
};
export default SignUp;
