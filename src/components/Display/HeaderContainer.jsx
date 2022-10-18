import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaUserAstronaut } from 'react-icons/fa';
import { BiBookAdd, BiHome } from 'react-icons/bi';
import { MdOutlineContentPaste } from 'react-icons/md';
import { GiBlackBook } from 'react-icons/gi';
import { BsChatRightDots, BsBlockquoteRight } from 'react-icons/bs';
import { AiOutlineFileAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { auth } from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import logo2 from '../../img/logo2.png';
import Avatar from '../../img/avatar.png';
import Login from '../children/Login.jsx';
import { ROOT_USER_EMAIL } from '../../data/main';

function HeaderContainer() {
    const [{ user, cartShow, LOGINSHOW, cartItems }, dispatch] = useStateValue();
    const [userAuthState] = useAuthState(auth);
    const [isMenu, setIsMenu] = useState(false);
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

    const motion_container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0,
                staggerChildren: 0.02,
            },
        },
    };

    const motion_item = {
        hidden: { y: 10, x: 100, opacity: 0 },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
        },
    };
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
                                <motion.div
                                    className="z-50 my-6 mx-2 md:min-w-[400px] md:w-auto md:right-3 md:max-h-[500px] md:h-auto w-full h-full text-base top-14 right-0  inset-y-auto m-0 absolute
                             bg-primary rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                                    id="user-dropdown"
                                    data-popper-reference-hidden=""
                                    data-popper-escaped=""
                                    data-popper-placement="bottom"
                                >
                                    {user && user ? (
                                        <div className="">
                                            <div className="py-3 px-4">
                                                <span className="block text-sm text-gray-100 dark:text-white">
                                                    {user.displayName}
                                                </span>
                                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                                    {user.email}
                                                </span>
                                            </div>
                                            {/* <span className="m-4">Close</span> */}
                                        </div>
                                    ) : (
                                        <></>
                                    )}

                                    <motion.ul
                                        variants={motion_container}
                                        initial="hidden"
                                        animate="visible"
                                        className="motion_container mx-2 py-2 px-1"
                                        aria-labelledby="user-menu-button"
                                    >
                                        <>
                                            <motion.li className="motion_item" variants={motion_item}>
                                                <Link
                                                    to="/"
                                                    className="md:hidden block py-2 px-4 text-lg text-gray-200 hover:bg-cardOverlay  "
                                                    onClick={handleSetisMenu}
                                                    aria-current="page"
                                                >
                                                    <span className="flex items-center justify-start">
                                                        <BiHome className="mr-2 text-blue-400" />
                                                        Trang Chủ
                                                    </span>
                                                </Link>
                                            </motion.li>
                                            <motion.li className="motion_item" variants={motion_item}>
                                                <Link
                                                    to="/collections"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    <span className="flex items-center justify-start">
                                                        <AiOutlineShoppingCart className="mr-2 text-blue-400" />
                                                        Sản Phẩm
                                                    </span>
                                                </Link>
                                            </motion.li>
                                            <motion.li className="motion_item" variants={motion_item}>
                                                <Link
                                                    to="/data/hocphan"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    <span className="flex items-center justify-start">
                                                        <GiBlackBook className="mr-2 text-blue-400" />
                                                        Tài Liệu
                                                    </span>
                                                </Link>
                                            </motion.li>
                                            {/* <li>
                                                <Link
                                                    to="/resources"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-sm text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Tài Nguyên
                                                </Link>
                                            </li> */}
                                            <motion.li className="motion_item" variants={motion_item}>
                                                <Link
                                                    to="/tracuu"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    <span className="flex items-center justify-start">
                                                        <BsChatRightDots className="mr-2 text-blue-400" />
                                                        Chat
                                                    </span>
                                                </Link>
                                            </motion.li>
                                            <motion.li className="motion_item" variants={motion_item}>
                                                <Link
                                                    to="/blog"
                                                    onClick={handleSetisMenu}
                                                    className="md:hidden block py-2 px-4 text-lg text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    <span className="flex items-center justify-start">
                                                        <BsBlockquoteRight className="mr-2 text-blue-400" />
                                                        Blog
                                                    </span>
                                                </Link>
                                            </motion.li>
                                        </>
                                        <motion.li className="motion_item" variants={motion_item}>
                                            {user && user ? (
                                                <Link to={'/profile/' + user.uid}>
                                                    <p
                                                        className=" block py-2 px-4 text-lg text-gray-200 hover:bg-cardOverlay "
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        {' '}
                                                        <span className="flex items-center justify-start">
                                                            <FaUserAstronaut className="mr-2 text-blue-400" />
                                                            Trang Cá Nhân
                                                        </span>
                                                    </p>
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </motion.li>
                                        <motion.li className="motion_item" variants={motion_item}>
                                            {user && user ? (
                                                <Link to={'/publish/post'}>
                                                    <p
                                                        className=" block py-2 px-4 text-lg text-gray-200 hover:bg-cardOverlay "
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        {' '}
                                                        <span className="flex items-center justify-start">
                                                            <AiOutlineFileAdd className="mr-2 text-blue-400" />
                                                            Viết Blog
                                                        </span>
                                                    </p>
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </motion.li>
                                        {ROOT_USER_EMAIL.map((item) => {
                                            return (
                                                <>
                                                    <motion.li className="motion_item" variants={motion_item}>
                                                        {user && userAuthState.uid == item ? (
                                                            <Link to={'/data/markdown/hocphan/create'}>
                                                                <p
                                                                    className=" block py-2 px-4 text-lg text-gray-200 hover:bg-cardOverlay "
                                                                    onClick={() => setIsMenu(false)}
                                                                >
                                                                    {' '}
                                                                    <span className="flex items-center justify-start">
                                                                        <BiBookAdd className="mr-2 text-blue-400" />
                                                                        Thêm Tài Liệu
                                                                    </span>
                                                                </p>
                                                            </Link>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </motion.li>
                                                </>
                                            );
                                        })}
                                        <motion.li className="motion_item" variants={motion_item}>
                                            {user && user ? (
                                                <Link to={`/posts/drafts/+ user.uid`}>
                                                    <p
                                                        className=" block py-2 px-4 text-lg text-gray-200 hover:bg-cardOverlay "
                                                        onClick={() => setIsMenu(false)}
                                                    >
                                                        {' '}
                                                        <span className="flex items-center justify-start">
                                                            <MdOutlineContentPaste className="mr-2 text-blue-400" />
                                                            Quản Lý Nội Dung
                                                        </span>
                                                    </p>
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </motion.li>
                                        <motion.li className="motion_item" variants={motion_item}>
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
                                        </motion.li>
                                    </motion.ul>
                                </motion.div>
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
                            {/* <li>
                                <Link
                                    to="/resources"
                                    className="text-md text-gray-100 block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    <a href="#" class=" md:text-blue-700">
                                        Tài Nguyên
                                    </a>
                                </Link>
                            </li> */}
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
