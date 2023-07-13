import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import {
  doc,
  collection,
  onSnapshot,
  where,
  query,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const fetchOrdenByIdRealTime = createAsyncThunk(
  'firebase/fetchOrdenByIdRealTime',
  async (orderId, { dispatch }) => {
    try {
      const docRef = doc(db, 'ordenes', orderId);
      let ordenData = null;

      onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          ordenData = { id: docSnap.id, ...docSnap.data() };
        }
        dispatch(setOrdenes(ordenData));
      });

      return ordenData;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchOrdenById = createAsyncThunk(
  'firebase/fetchOrdenById',
  async (orderId, { dispatch }) => {
    try {
      const docRef = doc(db, 'ordenes', orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const ordenData = { id: docSnap.id, ...docSnap.data() };
        dispatch(setOrdenes([ordenData]));
        return ordenData;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchOrdenes = createAsyncThunk(
  'firebase/fetchOrdenes',
  async (_, { dispatch }) => {
    try {
      const ordenes = collection(db, 'ordenes');

      onSnapshot(ordenes, (snapshot) => {
        const ordenesData = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });

        dispatch(setOrdenes(ordenesData));
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al consultar las órdenes',
      });

      throw error;
    }
  }
);

export const fetchOrdenesByUserId = createAsyncThunk(
  'firebase/fetchOrdenesByUserId',
  async (userId, { dispatch }) => {
    try {
      const ordenes = collection(db, 'ordenes');
      const querySnapshot = await getDocs(
        query(ordenes, where('userId', '==', userId))
      );

      const ordenesData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });

      dispatch(setOrdenes(ordenesData));
      return ordenesData;
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al consultar las órdenes',
      });

      throw error;
    }
  }
);

const setOrdenes = createAction('order/setOrdenes');

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdenById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchOrdenById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrdenById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOrdenes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchOrdenes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders.push(action.payload);
      })
      .addCase(fetchOrdenes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(setOrdenes, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default orderSlice.reducer;
