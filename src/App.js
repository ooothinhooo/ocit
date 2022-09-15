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
} from './components';
import { Admin, HocPhan, Thanks } from './pages';
import { getAllOCIT, getArr, getAllItemsInFolder } from './utils/firebaseFunctions';
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

function App() {
    const [{ user }, dispatch] = useStateValue();
    const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';

    const fetchData = async () => {
        await getAllOCIT().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                OCIT: data,
            });
        });
    };

    useEffect(() => {
        fetchData();
        getAllItemsInFolder();
        getArr();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                {/* <Header /> */}
                <HeaderContainer />
                <main className="mt-14 md:mt-10 px-4 md:px-16  py-4 w-full  bg-primary">
                    <Routes>
                        {user && user.email === ROOT_USER_EMAIL ? (
                            <>
                                <Route path="/home" element={<MainContainer />} />
                                <Route path="/*" element={<Admin />} />
                                <Route path="/createItem" element={<CreateContainer />} />
                                <Route path="/viewproduct" element={<ViewProductsList />} />
                                <Route path="/update/:uid" element={<UpdateProduct />} />
                                <Route path="/products/:uid" element={<ViewCartItem />} />
                                {/* <Route path="/admin" element={<Admin />} /> */}
                            </>
                        ) : (
                            <>
                                <Route path="/*" element={<MainContainer />} />
                            </>
                        )}
                        {/* link to page */}
                        <Route path="/profile/:uid" element={<UserProfile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/xincamon" element={<Thanks />} />

                        {user && user ? (
                            <>
                                <>
                                    <Route path="/CT242" element={<CT242 />} />
                                    <Route path="/CT112" element={<CT112 />} />
                                    <Route path="/CT761" element={<CT176 />} />
                                    <Route path="/CT178" element={<CT178 />} />
                                    <Route path="/CT179" element={<CT179 />} />
                                    <Route path="/CT180" element={<CT180 />} />
                                    <Route path="/CT188" element={<CT188 />} />
                                    <Route path="/CT190" element={<CT190 />} />
                                    <Route path="/CT239" element={<CT239 />} />
                                    <Route path="/CT240" element={<CT240 />} />
                                    <Route path="/CT241" element={<CT241 />} />
                                    <Route path="/CT242" element={<CT242 />} />
                                    <Route path="/CT244" element={<CT244 />} />
                                    <Route path="/CT287" element={<CT287 />} />
                                    <Route path="/CT296" element={<CT296 />} />
                                    <Route path="/CT449" element={<CT449 />} />
                                </>
                                ,
                            </>
                        ) : (
                            <></>
                        )}
                        <Route path="/hocphan" element={<HocPhan />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/collections" element={<ProductPage />} />
                    </Routes>
                </main>
                {/* <DocViewer documents={docs} /> */}
            </div>
        </AnimatePresence>
    );
}

export default App;
