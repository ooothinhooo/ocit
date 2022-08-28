import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
function UserProfile() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';

    return (
        <div class="bg-primary block py-10">
            <div class="max-w-2xl mx-auto">
                {/* <!--
            ! ------------------------------------------------------------
            ! Profile banner and avatar
            ! ------------------------------------------------------------
            !--> */}
                <div class="w-full">
                    <div class="w-full bg-blue-600 h-48 rounded-t-lg"></div>
                    <div class="absolute -mt-20 ml-5">
                        <div class=" h-36 w-40 rounded-lg shadow-md border-b border-primary">
                            <img src={user.photoURL} alt="" class="h-full w-full" />
                        </div>
                    </div>
                </div>

                {/* <!--
            ! ------------------------------------------------------------
            ! Profile general information
            ! ------------------------------------------------------------
            !--> */}
                <div class=" rounded-b-lg p-5 pt-20 flex flex-col">
                    <div class="mb-1 h-5 w-40">
                        <p>
                            UserName: <span> {user.displayName}</span>
                        </p>
                    </div>

                    <div class="mb-1 h-5 w-46">
                        <p>
                            Email: <span> {user.email}</span>
                        </p>
                    </div>
                    <div class="text-sm mt-2 text-black">
                        <div class="flex flex-row  space-x-1 items-center">
                            <div class="mb-1 h-5 w-20">Root:</div>
                            {/* <div class="bg-blue-200 rounded-full h-1 w-1"></div> */}
                            <div class="mb-1 h-5 w-20">
                                {user.email === ROOT_USER_EMAIL ? <p>True</p> : <p>False</p>}
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div class="pt-8 flex gap-8">
                        <div class="flex flex-col">
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div class="flex flex-col">
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div class="flex flex-col">
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div class="flex flex-col">
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                    </div> */}
                    <div class="py-5 break-all bbcode">
                        <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
                        <div class="mb-1 bg-gray-200 border border-gray-300 w-full h-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
