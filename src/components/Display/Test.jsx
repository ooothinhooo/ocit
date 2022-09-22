import React, { useState, useEffect } from 'react';

import MarkDownContainer from '../children/MarkDownContainer';

function Test() {
    const [contentTab10, setContentTab10] = useState('');

    let tab5 = './data/MarkDown/CT242/Theory/B10.md';
    useEffect(() => {
        fetch(tab5)
            .then((res) => res.text())
            .then((text) => setContentTab10(text));
    }, []);
    return (
        <div>
            <MarkDownContainer data={contentTab10} />
        </div>
    );
}

export default Test;
