import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItenToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItenToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
