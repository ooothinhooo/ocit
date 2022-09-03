import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaUserEdit } from 'react-icons/fa';
import { AiOutlineLogout, AiOutlineBars } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config.js';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import Logo from '../../img/logo.png';
import Avatar from '../../img/avatar.png';

function HeaderContainer() {
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
            window.location = '/';
        } else {
            // setIsMenu(!isMenu);
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
        window.location = '/';
    };

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    const handleSetisMenu = () => {
        setIsMenu(!isMenu);
    };
    return (
        <>
            <nav className="bg-primary  px-2 sm:px-4 py-2.5  dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to={'/'} className="flex items-center gap-2   ">
                        <img src={Logo} alt="" className="w-10 object-cover" />
                        <p className="text-red-600 text-xl font-bold"> OCIT </p>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <div className="relative flex items-center justify-center mr-4" onClick={showCart}>
                            <FaShoppingBasket className="text-white text-2xl cursor-pointer" />
                            {cartItems && cartItems.length > 0 && (
                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                                    <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                                </div>
                            )}
                        </div>
                        <div className="mr-3">
                            {user && user ? (
                                <button
                                    type="button"
                                    className="flex -mr-2 text-sm bg-gray-800  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <motion.img
                                        src={user ? user.photoURL : Avatar}
                                        whileTap={{ scale: 0.6 }}
                                        className="w-10 min-w-[40px] h10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
                                        alt="avatar"
                                    />
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={login}
                                        class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Login
                                    </button>
                                </>
                            )}
                        </div>

                        {/* <!-- Dropdown menu --> */}
                        {isMenu && (
                            <>
                                <div
                                    className=" z-50 my-4 text-base top-12 right-3  inset-y-auto  m-0 absolute
                             bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                                    id="user-dropdown"
                                    data-popper-reference-hidden=""
                                    data-popper-escaped=""
                                    data-popper-placement="bottom"
                                >
                                    {user && user ? (
                                        <div className="py-3 px-4">
                                            <span className="block text-sm text-gray-900 dark:text-white">
                                                {user.displayName}
                                            </span>
                                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                                {user.email}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}

                                    <ul className="py-1" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to={'/profile/' + user.uid}>
                                                <p
                                                    className=" block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    onClick={() => setIsMenu(false)}
                                                >
                                                    {' '}
                                                    View Profile
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            {user && user.email === ROOT_USER_EMAIL && (
                                                <Link to={'/createItem'}>
                                                    <p
                                                        className=" block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        New Item
                                                    </p>
                                                </Link>
                                            )}
                                        </li>
                                        <li>
                                            {user && user.email === ROOT_USER_EMAIL && (
                                                <Link to={'/viewproduct'}>
                                                    <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                        Product List
                                                    </p>
                                                </Link>
                                            )}
                                        </li>
                                        <li>
                                            {user && user ? (
                                                <p
                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                        {user && user ? (
                            <>
                                {' '}
                                <button
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    className="inline-flex items-center  p-2 ml-2 mr-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                    onClick={handleSetisMenu}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderContainer;
