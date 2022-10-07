import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { auth } from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import Logo from '../../img/logo.png';
import logo2 from '../../img/logo2.png';
import Avatar from '../../img/avatar.png';
import Login from '../children/Login.jsx';
import { ROOT_USER_EMAIL } from '../../data/main';
function HeaderContainer() {
    const [{ user, cartShow, LOGINSHOW, cartItems }, dispatch] = useStateValue();
    const [userAuthState] = useAuthState(auth);
    // const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';
    // console.log(user);

    const [isMenu, setIsMenu] = useState(false);

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
    const showLogin = () => {
        dispatch({
            type: actionType.SET_LOGIN_SHOW,
            LOGINSHOW: !LOGINSHOW,
        });
    };
    const handleSetisMenu = () => {
        setIsMenu(!isMenu);
    };

    const renderSwal = () => {
        Swal.fire({
            title: 'HÃY ĐĂNG NHẬP ĐỂ XEM THÊM',
            width: 600,
            padding: '3em',
            color: '#fff',
            background: '#A5C9CA',
            backdrop: `
          rgba(0,0,123,0.4)
          url('https://i.ibb.co/XxsmhTz/meme.gif')
          left top
          no-repeat
        `,
        });
    };
    // console.log(user.photoURL);
    return (
        <AnimatePresence>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-primary h-full  px-2 sm:px-4 py-2.5  dark:bg-gray-900"
            >
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to={'/'} className="flex items-center gap-2  ml-4 ">
                        <img src={logo2} alt="" className="w-[130px] object-cover scale-150" />
                        {/* <p className="text-red-600 text-xl font-bold"> OCIT </p> */}
                    </Link>
                    <Login />
                    <div className="flex items-center md:order-2">
                        {user && user ? (
                            <>
                                <div
                                    className="relative flex items-center justify-center mr-4 rounded-full p-2 
                                    active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-200 hover:border hover:border-[#483838]
                                "
                                    onClick={showCart}
                                >
                                    <FaShoppingBasket className="hover:text-[#B1B2FF] text-white text-2xl cursor-pointer" />
                                    {cartItems && cartItems.length > 0 && (
                                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                                            <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="relative flex items-center justify-center mr-4 rounded-full p-2 
                                    active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-200  hover:border hover:border-[#483838]
                                "
                                    onClick={renderSwal}
                                >
                                    <FaShoppingBasket className="text-white text-2xl cursor-pointer" />
                                    {cartItems && cartItems.length > 0 && (
                                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                                            <p className="text-xs text-white font-semibold">{cartItems?.length}</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

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
                                        // src={user ? user.photoURL : Avatar}
                                        src={user.photoURL ? user.photoURL : Avatar}
                                        whileTap={{ scale: 0.6 }}
                                        className="w-10 min-w-[40px] h10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
                                        alt=""
                                    />
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={showLogin}
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
                                    className="z-50 my-6 mx-2 text-base top-12 right-3  inset-y-auto m-0 absolute
                             bg-primary rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                                    id="user-dropdown"
                                    data-popper-reference-hidden=""
                                    data-popper-escaped=""
                                    data-popper-placement="bottom"
                                >
                                    {user && user ? (
                                        <div className="py-3 px-4">
                                            <span className="block text-sm text-gray-100 dark:text-white">
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
                                        <>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-cardOverlay  "
                                                    onClick={handleSetisMenu}
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/collections"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Sản Phẩm
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/data/hocphan"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Học Phần
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/resources"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Tài Nguyên
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/tracuu"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Tra Cứu
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                        </>
                                        <li>
                                            {user && user ? (
                                                <Link to={'/profile/' + user.uid}>
                                                    <p
                                                        className=" block py-2 px-4 text-sm text-gray-200 hover:bg-cardOverlay "
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        {' '}
                                                        View Profile
                                                    </p>
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                        <li>
                                            {user && user ? (
                                                <Link to={'/publish/post'}>
                                                    <p
                                                        className=" block py-2 px-4 text-sm text-gray-200 hover:bg-cardOverlay "
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        {' '}
                                                        Write Blog
                                                    </p>
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                        {ROOT_USER_EMAIL.map((item) => {
                                            return (
                                                <>
                                                    <li>
                                                        {user && userAuthState.uid == item ? (
                                                            <Link to={'/data/markdown/hocphan/create'}>
                                                                <p
                                                                    className=" block py-2 px-4 text-sm text-gray-200 hover:bg-cardOverlay "
                                                                    onClick={() => setIsMenu(false)}
                                                                >
                                                                    {' '}
                                                                    Write Data Học Phần
                                                                </p>
                                                            </Link>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </li>
                                                </>
                                            );
                                        })}

                                        <li>
                                            {user && user ? (
                                                <p
                                                    // className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    onClick={logout}
                                                    className="block mt-2 py-2 px-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold  border rounded shadow"
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
                                <div className="">
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
                                </div>
                            </>
                        ) : (
                            <>
                                {' '}
                                <button
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    className="inline-flex items-center md:hidden  p-2 ml-2 mr-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        )}
                    </div>
                    <div
                        className="hidden md:flex lg:flex xl:flex justify-between items-center w-full  md:w-auto md:order-1 bg-primary mb-4"
                        id="mobile-menu-2"
                    >
                        <ul className="flex  flex-col p-4  bg-primary rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className="text-md text-gray-100 block py-2 pr-4 pl-3 md:p-0  font-bold  bg-blue-700 rounded md:bg-transparent  "
                                >
                                    <a href="#" class="text-gray-900 active md:text-blue-700" aria-current="page">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/collections"
                                    className="text-md text-gray-100 block py-1 pr-2 pl-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Sản Phẩm
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/data/hocphan"
                                    className="text-md text-gray-100 block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Học Phần
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/resources"
                                    className="text-md text-gray-100 block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Tài Nguyên
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tracuu"
                                    className="block py-2 pr-4 pl-3 text-md text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Tra Cứu
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="block py-2 pr-4 pl-3 text-md text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
}

export default HeaderContainer;
