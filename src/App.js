import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer, UserProfile } from './components';
import { getAllFoodItems } from './utils/firebaseFunctions';
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />
                <main className="mt-14 md:mt-20 px-4 md:px-16  py-4 w-full">
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/createItem" element={<CreateContainer />} />
                        <Route path="/profile/:uid" element={<UserProfile />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;
