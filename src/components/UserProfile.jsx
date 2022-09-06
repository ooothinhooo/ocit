import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
function UserProfile() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border-b-gray-700"
            >
                <div className="bg-primary">
                    <div className="rounded-full flex justify-between">
                        <div className="pl-4">
                            <h1 className="text-white translate-y-2 font-medium text-xl"> {user.email}</h1>
                        </div>
                        <p>
                            <a>
                                <h4 className="text-white -translate-y-2 pt-5 pr-5">
                                    <p className="font-black">
                                        Root: {user.email == ROOT_USER_EMAIL ? 'True' : 'False'}
                                    </p>
                                </h4>
                            </a>
                        </p>
                    </div>
                    <hr />
                </div>

                <div className="bg-primary">
                    <div className="py-16 bg-primary">
                        <div className="container m-auto px-6">
                            <div className="lg:flex justify-between items-center">
                                <div className="lg:w-6/12 lg:p-0 p-7">
                                    <h1 className="sm:text-5xl text-4xl text-white font-medium leading-tight mb-5 capitalize">
                                        Hi, {user.displayName}
                                    </h1>
                                    <p className="text-xl text-zinc-200">ID: {user.uid}</p>
                                    <p className="text-xl text-zinc-200">Phone: {user.phoneNumber}</p>

                                    <div className="py-5 flex gap-x-4">
                                        <a className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">
                                            {/* plpal */}
                                        </a>
                                        <a className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">
                                            {/* Social Links */}
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:w-4/12 rounded-full scale-100  ">
                                    <img
                                        className="rounded-full"
                                        alt="sahil logo"
                                        width="350"
                                        height="350"
                                        src={user.photoURL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

export default UserProfile;
