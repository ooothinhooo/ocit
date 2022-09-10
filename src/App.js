import './App.css';
import React, { useRef, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
    Header,
    MainContainer,
    CreateContainer,
    UserProfile,
    ViewProductsList,
    Contact,
    HeaderContainer,
    UpdateProduct,
    Banner,
    ViewCartItem,
} from './components';
import { HocPhan, Thanks } from './pages';
import { getAllOCIT, getArr, pushArr, getAllItemsInFolder } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import CT242 from './HocPhan/CT242';
import CT112 from './HocPhan/CT112';
import CT179 from './HocPhan/CT179';

function App() {
    const [{ OCIT }, dispatch] = useStateValue();

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
        // getdata();
        getAllItemsInFolder();
        getArr();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                {/* <Header /> */}

                <HeaderContainer />
                {/* <Reactmd /> */}
                <main className="mt-14 md:mt-10 px-4 md:px-16  py-4 w-full  bg-primary">
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/createItem" element={<CreateContainer />} />
                        <Route path="/profile/:uid" element={<UserProfile />} />
                        <Route path="/viewproduct" element={<ViewProductsList />} />
                        <Route path="/update/:uid" element={<UpdateProduct />} />
                        <Route path="/products/:uid" element={<ViewCartItem />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/xincamon" element={<Thanks />} />

                        <Route path="/hocphan" element={<HocPhan />} />
                        <Route path="/CT242" element={<CT242 />} />
                        <Route path="/CT112" element={<CT112 />} />
                        <Route path="/CT179" element={<CT179 />} />
                    </Routes>
                </main>
                {/* <DocViewer documents={docs} /> */}
            </div>
        </AnimatePresence>
    );
}

export default App;
