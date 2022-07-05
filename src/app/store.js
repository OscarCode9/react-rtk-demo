import { configureStore } from "@reduxjs/toolkit";
import cake from "../features/cake/cakeSlice";
import icecream from "../features/icecream/icecreamSlice";
import  { createLogger } from "redux-logger";
import user from "../features/user/userSlice";
const logger = createLogger();

const store = configureStore({
  reducer: {
    cake,
    icecream,
    user,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
