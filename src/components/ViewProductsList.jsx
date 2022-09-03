import React from 'react';
import { useStateValue } from '../context/StateProvider';
import ListProducts from './ListProducts';
import RowContainer from './RowContainer';

function ViewProductsList() {
    const [{ OCIT, cartShow }, dispatch] = useStateValue();

    return (
        <div className="w-full h-[75vh]">
            <ListProducts flag={false} data={OCIT} />
        </div>
    );
}

export default ViewProductsList;
