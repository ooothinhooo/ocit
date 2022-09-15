import React, { useState } from 'react';

import { ChildrenMenu, MenuContainer, RowContainer } from '../components';
import { useStateValue } from '../context/StateProvider';

function ProductPage() {
    const [filter, setFilter] = useState('CT178');
    const [{ OCIT, cartShow, user }, dispatch] = useStateValue();

    return (
        <>
            <MenuContainer />
        </>
    );
}

export default ProductPage;
