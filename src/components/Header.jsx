import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaUserEdit } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config.js';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

function Header() {
    const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    const login = async () => {
        if (!user) {
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;
            localStorage.setItem('user', JSON.stringify(providerData[0]));
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
        } else {
            setIsMenu(!isMenu);
            // isMobileMenu(false);
        }
        // console.log(user);
    };

    //logout function
    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
            {/* // desktop & tablet */}
            <div className="hidden md:flex w-full  items-center justify-between">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} alt="" className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold"> othinho </p>
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8 "
                    >
                        <li className="  text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Home
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            <a href="#menu">Menu</a>
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            About Us
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Services
                        </li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <FaShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                                <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <motion.img
                            src={user ? user.photoURL : Avatar}
                            whileTap={{ scale: 0.6 }}
                            className="w-10 min-w-[40px] h10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
                            alt="avatar"
                            onClick={login}
                        />

                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2"
                            >
                                <Link to={'/profile/' + user.uid}>
                                    <p
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-lightBlue rounded-md m-1 hover:bg-slate-100 
                                transition-all duration-100 ease-in-out text-textColor text-base"
                                        onClick={() => setIsMenu(false)}
                                    >
                                        {' '}
                                        View Profile <FaUserEdit />
                                    </p>
                                </Link>

                                {user && user.email === ROOT_USER_EMAIL && (
                                    <Link to={'/createItem'}>
                                        <p
                                            className="px-4 py-2 flex items-center gap-3 cursor-pointer  bg-lightBlue rounded-md  m-1 hover:bg-slate-100 
                                            transition-all duration-100 ease-in-out text-textColor text-base"
                                            onClick={() => setIsMenu(false)}
                                        >
                                            New Item <GrAddCircle />
                                        </p>
                                    </Link>
                                )}
                                {user && user.email === ROOT_USER_EMAIL && (
                                    <Link to={'/viewproduct'}>
                                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-lightBlue rounded-md  m-1 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                            Product List
                                            <MdOutlineProductionQuantityLimits />
                                        </p>
                                    </Link>
                                )}
                                <p
                                    className="px-4 py-2 flex items-center gap-3 bg-cardOverlay rounded-md cursor-pointer hover:bg-slate-100 
                                                transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logout}
                                >
                                    Logout <AiOutlineLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            {/* // mobile */}
            <div className="flex md:hidden w-full h-full items-center justify-between">
                <div onClick={showCart} className="relative flex items-center justify-center">
                    <FaShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                    {cartItems && cartItems.length > 0 && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                        </div>
                    )}
                </div>

                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} alt="" className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold"> othinho </p>
                </Link>

                <div className="relative">
                    <motion.img
                        src={user ? user.photoURL : Avatar}
                        whileTap={{ scale: 0.6 }}
                        className="w-10 min-w-[40px] h10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
                        alt="avatar"
                        onClick={login}
                    />

                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
                        >
                            <Link to={'/profile/' + user.uid}>
                                <p
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                                transition-all duration-100 ease-in-out text-textColor text-base"
                                >
                                    View Profile <FaUserEdit />
                                </p>
                            </Link>

                            {user && user.email === ROOT_USER_EMAIL && (
                                <Link to={'/createItem'}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                        New Item <GrAddCircle />
                                    </p>
                                </Link>
                            )}
                            {user && user.email === ROOT_USER_EMAIL && (
                                <Link to={'/viewproduct'}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                        View Product List
                                        <MdOutlineProductionQuantityLimits />
                                    </p>
                                </Link>
                            )}
                            <ul className="flex flex-col ">
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointerhover:bg-slate-100  px-4 py-2">
                                    Home
                                </li>
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 ">
                                    Menu
                                </li>
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2">
                                    About Us
                                </li>
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2">
                                    Services
                                </li>
                            </ul>
                            <p
                                className="m-2 p-2 rounded-md shadow-md flex items-center   hover:bg-gray-300  transition-all duration-100 ease-in-out gap-3 cursor-pointer justify-center bg-gray-200 text-textColor text-base"
                                onClick={logout}
                            >
                                Logout <AiOutlineLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
