import './App.css';
import React, { useEffect } from 'react';
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
} from './components';
import { getAllFoodItems, getAllItemsInFolder } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
function App() {
    const [{ foodItems }, dispatch] = useStateValue();
    const fetchData = async () => {
        await getAllFoodItems().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            });
        });
    };
    const getdata = async () => {
        await getAllItemsInFolder().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            });
        });
    };

    useEffect(() => {
        fetchData();
        getdata();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                {/* <Header /> */}
                <HeaderContainer />
                <main className="mt-14 md:mt-20 px-4 md:px-16  py-4 w-full">
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/createItem" element={<CreateContainer />} />
                        <Route path="/profile/:uid" element={<UserProfile />} />
                        <Route path="/viewproduct" element={<ViewProductsList />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;
