import React from 'react';
import { AccordionContainer, AddArticle, Articles, Task, ToggleModal } from '../components';
const HocPhan = () => {
    return (
        <div className="w-screen">
            <Task />

            <AddArticle colDB="cmt_hocphan" />
            <div className="h-full">
                <Articles colDB="cmt_hocphan" />
            </div>
        </div>
    );
};

export default HocPhan;
