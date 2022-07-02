import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import cartItems from '../../cartItems';
import axios from 'axios';

const url = ' https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      // console.log(resp); objeto con elementos tales ccomo request, headers,data, status...
      // console.log(thunkAPI) un objeto gigante con dispatch, extra, fullfillwhitvalue, getState, etc (getState es importante)
      // console.log(thunkAPI.getState) tenemos los valores para cart y modal,
      // console.log(thunkAPI.dispatch) se puede acceder a los reducers y ejecutarla desde aquí mismo
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action); un objeto con type y payload
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      // console.log(action) objeto con payload, error, meta, type, en el payload veremos 'shomething went wrong
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice); tiene propiedad llamada actions
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
