import React from 'react';
import { useStateValue } from '../context/StateProvider';
import ListProducts from './ListProducts';
import RowContainer from './RowContainer';

function ViewProductsList() {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();

    return (
        <div className="w-full">
            <ListProducts flag={false} data={foodItems} />
        </div>
    );
}

export default ViewProductsList;
