import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { authentication } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import Swal from 'sweetalert2';
import { app } from '../../firebase.config.js';
import { logo } from '../../img';
import logo2 from '../../img/logo2.png';

function Login() {
    const [{ user, LOGINSHOW }, dispatch] = useStateValue();
    const firebaseAuth = getAuth(app);

    const loginWithGoogle = async () => {
        if (!user) {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;
            localStorage.setItem('user', JSON.stringify(providerData[0]));
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            showLogin();
            window.location = '/';
        } else {
            Swal.fire('Đăng Nhập Thất Bại', 'Vui Lòng Thử Lại', 'error');
        }
    };
    const loginWithFacebook = async () => {
        if (!user) {
            const provider = new FacebookAuthProvider();
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;
            localStorage.setItem('user', JSON.stringify(providerData[0]));
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });

            showLogin();
            window.location = '/';
        } else {
            Swal.fire('Đăng Nhập Thất Bại', 'Vui Lòng Thử Lại', 'error');
        }
    };
    const loginWithGithub = async () => {
        if (!user) {
            const provider = new GithubAuthProvider();
            const { user } = await signInWithPopup(firebaseAuth, provider);
            const { refreshToken, providerData } = user;
            localStorage.setItem('user', JSON.stringify(providerData[0]));
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });

            showLogin();
            window.location = '/';
        } else {
            Swal.fire('Đăng Nhập Thất Bại', 'Vui Lòng Thử Lại', 'error');
        }
    };
    const showLogin = () => {
        dispatch({
            type: actionType.SET_LOGIN_SHOW,
            LOGINSHOW: !LOGINSHOW,
        });
    };
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className={`${
                        LOGINSHOW ? '' : 'hidden'
                    } fixed justify-center top-0 left-0 right-0 bottom-0 m-auto w-full h-screen bg-primary opacity-25 drop-shadow-md flex z-[222]`}
                >
                    <div className="md:w-[73%] md:h-[85%] w-[90%] h-[90%] rounded-lg flex m-auto items-center bg-white justify-center">
                        <div class=" flex    mx-auto my-8">
                            <div class=" max-w-xl mx-auto w-full flex items-center ">
                                <div class=" my-4 max-w-sm text-center  ">
                                    <div class="flex items-center justify-center m-3">
                                        <img class="w-40 scale-150 " src={logo2} />
                                    </div>
                                    <p class="text-primary text-2xl  font-bold mb-10">
                                        Đăng Nhập Vào <span class="text-red-500">OCIT</span>
                                    </p>

                                    <div
                                        onClick={loginWithGoogle}
                                        class="md:w-full  w-[85%] flex p-3  m-auto my-4 justify-center items-center
                                         bg-white border  rounded-full text-black md:hover:text-black-600 hover:bg-gray-200 "
                                    >
                                        <div className="text-2xl text-left  mr-8 md:mr-[65px]">
                                            <FcGoogle className="" />
                                        </div>
                                        <div className="mr-5 px-4 text-[14px] md:text-[16px] text-semibold ">
                                            Tiếp tục với Google
                                        </div>
                                    </div>
                                    <div
                                        onClick={loginWithFacebook}
                                        class="md:w-full  w-[85%] flex p-3 m-auto my-4 justify-center items-center
                                         bg-white border  rounded-full text-black md:hover:text-black-600 hover:bg-gray-200 "
                                    >
                                        <div className="text-2xl text-left  mr-8 md:mr-[65px]">
                                            <FaFacebookSquare className=" text-blue-700" />
                                        </div>
                                        <div className="mr-5 -ml-4 px-4 text-[14px] md:text-[16px] text-semibold ">
                                            Tiếp tục với Facebook
                                        </div>
                                    </div>
                                    <div
                                        onClick={loginWithGithub}
                                        class="md:w-full  w-[85%] flex p-3  m-auto my-4 justify-center items-center
                                         bg-white border  rounded-full text-black md:hover:text-black-600 hover:bg-gray-200 "
                                    >
                                        <div className="text-2xl text-left  mr-12 md:mr-[65px]">
                                            <FaGithub className="" />
                                        </div>
                                        <div className="mr-5 px-4 -ml-4 md:mr-6 md:ml-0 text-[14px] md:text-[16px] text-semibold ">
                                            Tiếp tục với Github
                                        </div>
                                    </div>

                                    <button
                                        onClick={showLogin}
                                        class="right-0 mt-12 mb-6 col-start-11 col-end-13 rounded-lg px-4 py-2 border   text-primary hover:bg-green-800 hover:text-white duration-300"
                                    >
                                        Close
                                    </button>

                                    <div class=" -mb-10 mx-4 text-[11px] text-gray-300">
                                        <p>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</p>
                                        <p>
                                            <a href="#">Điều khoản sử dụng</a> của chúng tôi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default Login;
