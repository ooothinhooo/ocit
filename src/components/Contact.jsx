import React, { useRef, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import CartItem from './CartItem';
function Contact() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yu3xjmp', 'template_xfyoyj5', form.current, 'w84lSwCGvIpj7Zgel').then(
            (result) => {
                console.log(result.text);
                setDone(true);
                form.reset();
            },
            (error) => {
                console.log(error.text);
            },
        );
    };
    function a() {
        var data = cartItems.map((item) => {
            return `${item?.title}`;
        });
        return data;
    }
    const message = `Tôi ${user.displayName} xác nhận đặt hàng ${a()}.
Mọi thông tin chi tiết liên hệ qua email ${user.email}`;

    return (
        <div className="flex min-h-screen items-center justify-start bg-primary">
            <div className="mx-auto w-full max-w-lg bg-cardOverlay p-10 m-2 rounded-xl">
                <h1 className="text-4xl font-medium">Xác Nhận Đặt Hàng</h1>
                <p className="mt-3">Dịch vụ othinho</p>

                <form ref={form} onSubmit={sendEmail} className="mt-10">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                            <input
                                type="text"
                                name="name"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                value={user.displayName}
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Your name
                            </label>
                        </div>
                        <div className="relative z-0">
                            <input
                                type="text"
                                name="email"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                value={user.email}
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Your email
                            </label>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea
                                name="message"
                                rows="5"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                value={message}
                            ></textarea>
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Your message
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">
                        <Link to="/">Xác Nhận</Link>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
