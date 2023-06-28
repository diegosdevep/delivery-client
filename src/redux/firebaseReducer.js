import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import Toast from 'react-native-toast-message';
import { db } from '../firebase/firebase';

export const fetchProductos = createAsyncThunk(
  'firebase/fetchProductos',
  async () => {
    try {
      const products = collection(db, 'productos');
      const snapshot = await getDocs(products);

      const productosData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });

      return productosData;
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al consultar los productos',
      });

      throw error;
    }
  }
);

export const subscribeToProductos = () => (dispatch) => {
  const products = collection(db, 'productos');

  const unsubscribe = onSnapshot(products, (snapshot) => {
    const productosData = snapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });

    dispatch(fetchProductos.fulfilled(productosData));
  });

  return unsubscribe;
};

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    menu: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.menu = action.payload.map((producto) => ({
          ...producto,
          id: producto.id,
        }));
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default firebaseSlice.reducer;
