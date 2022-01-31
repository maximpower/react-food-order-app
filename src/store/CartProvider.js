import { useReducer } from "react";

import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: newTotalAmount }
  }
  if(action.type === 'REMOVE') {
     const updatedItems = state.items.filter(i => i.id !== action.id);
     return { ...state, items: updatedItems }
  }
  return state;
}

export const CartProvider = ({ children }) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ 
      type: 'ADD',
      item: item
    })
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ 
      type: 'ADD',
      id: id
    })
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    remove: removeItemFromCartHandler
  };


	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};
