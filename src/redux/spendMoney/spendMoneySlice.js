import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products.json";

export const spendMoneySlice = createSlice({
  name: "spendMoney",
  initialState: {
    money: 100000000000,
    products: products,
    purchasedItems: [],
    leftMoney: 100000000000,
  },
  reducers: {
    addSpending: (state, action) => {
      const { amount, price } = action.payload;
      const productIndex = state.purchasedItems.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (
        productIndex > -1 &&
        amount > state.purchasedItems[productIndex].amount
      ) {
        const average = amount - state.purchasedItems[productIndex].amount;

        if (average * price > state.leftMoney) return;
      }

      if (productIndex > -1) {
        if (amount > 0) {
          state.purchasedItems[productIndex].amount = amount;
        } else if (amount === 0) {
          state.purchasedItems.splice(productIndex, 1);
        }
      } else if (amount > 0) {
        state.purchasedItems.push(action.payload);
      }

      state.leftMoney =
        state.money -
        state.purchasedItems.reduce(
          (total, { price, amount }) => total + price * amount,
          0
        );
    },
  },
});

export const { addSpending } = spendMoneySlice.actions;
export default spendMoneySlice.reducer;
