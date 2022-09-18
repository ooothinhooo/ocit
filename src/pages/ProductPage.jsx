import React, { useEffect } from 'react';

import { CartContainer, MenuContainer } from '../components';
// import { useStateValue } from '../context/StateProvider';
import { useStateValue } from '../context/StateProvider';

function ProductPage() {
    const [{ OCIT, cartShow }, dispatch] = useStateValue();
    useEffect(() => {}, [cartShow]);

    return (
        <>
            <MenuContainer />
            {cartShow && <CartContainer />}
        </>
    );
}

export default ProductPage;
