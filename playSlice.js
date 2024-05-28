import { legacy_createStore as createStore } from 'redux';

// reducer
const cartReducer = (
    state = {
        cart: [{ id: 1, qty: 10 }],
    },
    action
) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cart.find((item) => item.id === action.payload.id)) {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                qty: item.qty + action.payload.qty,
                            };
                        } else {
                            return item;
                        }
                    }),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }
        default:
            return state;
    }
};

// store

const store = createStore(cartReducer);
console.log('onCreate store:', store.getState());

// subscribe
store.subscribe(() => {
    console.log(store.getState());
});
// dispatch
const action1 = { type: 'ADD_TO_CART', payload: { id: 1, qty: 10 } };
const action2 = { type: 'ADD_TO_CART', payload: { id: 2, qty: 200 } };
const action3 = { type: 'ADD_TO_CART', payload: { id: 2, qty: 800 } };
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
