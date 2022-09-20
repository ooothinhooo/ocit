import { fetchUser, fetchCart } from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();
const cartInfo = fetchCart();
export const initialState = {
    user: userInfo,
    OCIT: null,
    OCIT_HOCPHAN: null,
    cartShow: false,
    LOGINSHOW: false,
    cartItems: cartInfo,
};
