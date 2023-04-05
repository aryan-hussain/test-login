import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://10.8.10.40:5000/product/allProducts');
    const data = await response.json();
    console.log(data)
    return data;
  },
);


const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => console.log(action.payload),
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;