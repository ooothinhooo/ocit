import React from 'react';
import { Task } from '../components';
const HocPhan = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="w-screen">
            <Task />
        </div>
    );
};

export default HocPhan;
