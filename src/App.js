import './App.css';
import React, { useRef, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
    MainContainer,
    CreateContainer,
    UserProfile,
    ViewProductsList,
    Contact,
    HeaderContainer,
    UpdateProduct,
    ViewCartItem,
    Test,
    CreateHocPhan,
    Articles,
    AddArticle,
    Article,
} from './components';
import { Admin, HocPhan, HomePage, Thanks, TraCuu } from './pages';
import { getAllOCIT, getAllOCIT_HOCPHAN, getOrder_OCIT } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import {
    CT112,
    CT176,
    CT178,
    CT179,
    CT180,
    CT188,
    CT190,
    CT239,
    CT240,
    CT241,
    CT242,
    CT244,
    CT287,
    CT296,
    CT449,
} from './HocPhan';
import ProductPage from './pages/ProductPage';
import Resources from './pages/Resources';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';

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
                <main className="mt-10 md:mt-8 px-4 md:px-16  py-2 w-full  bg-primary">
                    <Routes>
                        <Route path="/test" element={<Test />} />

                        {user && user.email === ROOT_USER_EMAIL ? (
                            <>
                                <Route path="/home" element={<HomePage />} />
                                <Route path="/*" element={<Admin />} />
                                <Route path="/createItem" element={<CreateContainer />} />
                                <Route path="/createHocPhan" element={<CreateHocPhan />} />
                                <Route path="/viewproduct" element={<ViewProductsList />} />
                                <Route path="/update/:uid" element={<UpdateProduct />} />
                                <Route path="/products/:uid" element={<ViewCartItem />} />
                                {/* <Route path="/admin" element={<Admin />} /> */}
                            </>
                        ) : (
                            <>
                                <Route path="/*" element={<HomePage />} />
                            </>
                        )}
                        {/* link to page */}
                        <Route path="/profile/:uid" element={<UserProfile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/xincamon" element={<Thanks />} />

                        {user && user ? (
                            <>
                                <>
                                    <Route path="/hocphan/CT242" element={<CT242 />} />
                                    <Route path="/hocphan/CT112" element={<CT112 />} />
                                    <Route path="/hocphan/CT761" element={<CT176 />} />
                                    <Route path="/hocphan/CT178" element={<CT178 />} />
                                    <Route path="/hocphan/CT179" element={<CT179 />} />
                                    <Route path="/hocphan/CT180" element={<CT180 />} />
                                    <Route path="/hocphan/CT188" element={<CT188 />} />
                                    <Route path="/hocphan/CT190" element={<CT190 />} />
                                    <Route path="/hocphan/CT239" element={<CT239 />} />
                                    <Route path="/hocphan/CT240" element={<CT240 />} />
                                    <Route path="/hocphan/CT241" element={<CT241 />} />
                                    <Route path="/hocphan/CT242" element={<CT242 />} />
                                    <Route path="/hocphan/CT244" element={<CT244 />} />
                                    <Route path="/hocphan/CT287" element={<CT287 />} />
                                    <Route path="/hocphan/CT296" element={<CT296 />} />
                                    <Route path="/hocphan/CT449" element={<CT449 />} />
                                </>
                                ,
                            </>
                        ) : (
                            <></>
                        )}
                        <Route path="/hocphan" element={<HocPhan />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/collections" element={<ProductPage />} />
                        <Route path="/tracuu" element={<TraCuu />} />
                        <Route path="/article/:id" element={<Article />} />

                        <Route
                            path="/cmt"
                            element={
                                <div className="h-full">
                                    <div className="col-md-4">
                                        <AddArticle />
                                    </div>
                                    <div className="col-md-8">
                                        <Articles />
                                    </div>
                                </div>
                            }
                        />
                        {/* <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                </main>
                {/* <DocViewer documents={docs} /> */}
            </div>
        </AnimatePresence>
    );
}

export default App;
