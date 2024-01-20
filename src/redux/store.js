import { configureStore } from "@reduxjs/toolkit";
import spendMoneySlice from "./spendMoney/spendMoneySlice";

export const store = configureStore({
  reducer: {
    spendMoney: spendMoneySlice,
  },
});
