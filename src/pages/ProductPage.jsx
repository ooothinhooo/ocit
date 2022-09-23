import React, { useEffect } from 'react';

import { AddArticle, Articles, CartContainer, MenuContainer } from '../components';
// import { useStateValue } from '../context/StateProvider';
import { useStateValue } from '../context/StateProvider';

function ProductPage() {
    const [{ OCIT, cartShow }, dispatch] = useStateValue();
    useEffect(() => {}, [cartShow]);

    return (
        <>
            <MenuContainer />
            {cartShow && <CartContainer />}

            <AddArticle colDB="cmt_sanpham" />
            <div className="h-full">
                <Articles colDB="cmt_sanpham" />
            </div>
        </>
    );
}

export default ProductPage;
