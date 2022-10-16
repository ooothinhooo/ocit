import './App.css';
import React, { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Contact, HeaderContainer, Test } from './components';
import {
    Admin,
    HocPhan,
    HomePage,
    Thanks,
    TraCuu,
    Blog,
    RenderBlog,
    WriteBlog,
    UpdateBlog,
    DataHocPhan,
    UserProfile,
    UserProfileID,
    CreateContainer,
    ViewProductsList,
    UpdateProduct,
    CreateHocPhan,
    CreateData,
    ViewHocPhan,
    UpdateData,
    Resources,
    ProductPage,
    ContentManagementPage,
} from './pages';
import { getAllOCIT, getAllOCIT_HOCPHAN, getOrder_OCIT } from './Firebase/index.js';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import { auth } from './firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ROOT_USER_EMAIL } from './data/main';
function App() {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    // const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';
    // console.log(user.photoURL);
    const [userAuthState] = useAuthState(auth);

    const fetchData = async () => {
        await getAllOCIT().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                OCIT: data,
            });
        });
    };
    const fetchHocPhan = async () => {
        await getAllOCIT_HOCPHAN().then((data) => {
            dispatch({
                type: actionType.SET_OCIT_HOCPHAN,
                OCIT_HOCPHAN: data,
            });
        });
    };
    const fetchOrder = async () => {
        await getOrder_OCIT().then((data) => {
            dispatch({
                type: actionType.SET_OCIT_ORDER,
                OCIT_ORDER: data,
            });
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        fetchHocPhan();
    }, []);
    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                {/* <Header /> */}
                <HeaderContainer />
                <main className="mt-10 md:mt-8 px-2 md:px-6  py-2 w-full  bg-primary">
                    <Routes>
                        <Route path="/test" element={<Test />} />
                        {ROOT_USER_EMAIL.map((root) => {
                            return (
                                <>
                                    {user && userAuthState?.uid === root ? (
                                        <>
                                            <Route path="/*" element={<Admin />} />
                                            <Route path="/home" element={<HomePage />} />
                                            <Route path="/createItem" element={<CreateContainer />} />
                                            <Route path="/createHocPhan" element={<CreateHocPhan />} />
                                            <Route path="/viewproduct" element={<ViewProductsList />} />
                                            <Route path="/update/:uid" element={<UpdateProduct />} />
                                            <Route path="/data/markdown/hocphan/create" element={<CreateData />} />
                                            <Route
                                                path="/data/markdown/hocphan/update/:id/:makeCode"
                                                element={<UpdateData />}
                                            />

                                            {/* <Route path="/admin" element={<Admin />} /> */}
                                        </>
                                    ) : (
                                        <>
                                            <Route path="/*" element={<HomePage />} />
                                        </>
                                    )}
                                </>
                            );
                        })}

                        {/* link to page */}
                        <Route path="/profile/:uid" element={<UserProfile />} />
                        <Route path="/posts/drafts/:uid" element={<ContentManagementPage />} />
                        <Route path="/profile/id/:id/:name" element={<UserProfileID />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/xincamon" element={<Thanks />} />

                        {user && user ? (
                            <>
                                <>
                                    <Route path="/data/hocphan/:filter/:title/:id" element={<ViewHocPhan />} />
                                    //blog post routes
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/blog/post/:id" element={<RenderBlog />} />
                                    <Route path="/publish/post" element={<WriteBlog />} />
                                    <Route path="/publish/update/:id/:makeCode" element={<UpdateBlog />} />
                                </>
                                ,
                            </>
                        ) : (
                            <></>
                        )}
                        <Route path="/hocphan" element={<HocPhan />} />
                        <Route path="/data/hocphan" element={<DataHocPhan />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/collections" element={<ProductPage />} />
                        <Route path="/tracuu" element={<TraCuu />} />
                        {/* <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                </main>
                {/* <DocViewer documents={docs} /> */}
            </div>
        </AnimatePresence>
    );
}

export default App;
