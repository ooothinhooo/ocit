import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import MenuProductList from './MenuProductList';
import ListProducts from './ListProducts';
import MenuContainer from '../../MenuContainer';

const color = 'rose';
function ViewProductsList() {
    const [{ OCIT, cartShow }, dispatch] = useStateValue();
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="w-full bg-primary">
            {/* <ListProducts flag={false} data={OCIT} /> */}
            <>
                <div className="flex flex-wrap  bg-primary">
                    <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                        (openTab === 1
                                            ? 'text-white bg-cardOverlay'
                                            : 'text-' + color + '-600 bg-whiteAlpha')
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    All Product
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                        (openTab === 2
                                            ? 'text-white bg-cardOverlay'
                                            : 'text-' + color + '-600 bg-whiteAlpha')
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Product Order By Category
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words  bg-primary w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                                        <ListProducts flag={false} data={OCIT} />
                                    </div>
                                    <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                                        <MenuProductList />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default ViewProductsList;
