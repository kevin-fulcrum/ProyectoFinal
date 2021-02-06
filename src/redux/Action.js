import Actions from '../resource/Actions';

const setCartOrder = (data) => {
  return {
    type: Actions.SET_ORDER,
    data,
  };
};

const getCartOrder = (data) => {
    return {
      type: Actions.GET_ORDER,
      data,
    };
};


const setCartProduct = (data) => {
  return async (dispatch, getState) => {
    const product = await getState().ProductReducer.products;
    
    if (product.length >= 0) {
      const cartProducts = product.concat(data);
      dispatch(setCartOrder(cartProducts));
    }
  };
};

const getCartProduct = () => {
  return async (dispatch, getState) => {
    const products = await getState().ProductReducer.products;
    dispatch(getCartOrder(products));
  };
};

export default {
  setCartProduct,
  getCartProduct
};
