export const actionType = {
    SET_USER: 'SET_USER',
    SET_CART_SHOW: 'SET_CART_SHOW',
    SET_LOGIN_SHOW: 'SET_LOGIN_SHOW',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_TOTAL: 'SET_TOTAL',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_OCIT_HOCPHAN: 'SET_OCIT_HOCPHAN',
    SET_OCIT_ORDER: 'SET_OCIT_ORDER',
};

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionType.SET_CART:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };
        case actionType.SET_LOGIN_SHOW:
            return {
                ...state,
                LOGINSHOW: action.LOGINSHOW,
            };
        case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case actionType.SET_TOTAL:
            return {
                ...state,
                total: state.cartItems.map((item) => item.price),
            };

        case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                OCIT: action.OCIT,
            };
        case actionType.SET_OCIT_HOCPHAN:
            return {
                ...state,
                OCIT_HOCPHAN: action.OCIT_HOCPHAN,
            };
        case actionType.SET_OCIT_ORDER:
            return {
                ...state,
                OCIT_ORDER: action.OCIT_ORDER,
            };
        default:
            return state;
    }
};

export default reducer;
