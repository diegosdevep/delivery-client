import { createSlice } from '@reduxjs/toolkit';

const pedidosSlice = createSlice({
  name: 'pedidos',
  initialState: {
    pedido: [],
    platillo: null,
  },
  reducers: {
    setPedido: (state, action) => {
      const nuevoPedido = action.payload;
      const pedidoExistente = state.pedido.find(
        (item) => item?.platillo?.id === nuevoPedido?.platillo?.id
      );

      if (pedidoExistente) {
        pedidoExistente.cantidad += nuevoPedido.cantidad;
      } else {
        state.pedido.push(nuevoPedido);
      }
    },
    setPlatillo: (state, action) => {
      state.platillo = action.payload;
    },
    deletePedido: (state, action) => {
      const idPedido = action.payload;
      state.pedido = state.pedido.filter(
        (item) => item.platillo.id !== idPedido
      );
    },

    clearPedido: (state) => {
      state.pedido = [];
      state.platillo = null;
    },
  },
});

export const { setPedido, setPlatillo, deletePedido, clearPedido } =
  pedidosSlice.actions;

export default pedidosSlice.reducer;
