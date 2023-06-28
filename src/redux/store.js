import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import firebaseReducer from './firebaseReducer';
import pedidoReducer from './pedidoReducer';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    firebase: firebaseReducer,
    pedido: pedidoReducer,
    orders: ordersReducer,
  },
});
