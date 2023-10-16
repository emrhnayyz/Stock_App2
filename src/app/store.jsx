import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
//Redux Persist automatically manages the Redux store on persistent storage methods such as localStorage or AsyncStorage. Thus, the app state is saved in the device memory or storage and restored on subsequent startups. In this way, users' preferences, session information and other data are preserved when the application is closed and opened.


const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer, 
  },
  devTools: process.env.NODE_ENV !== "production",
});
export let persistor = persistStore(store);
export default store; 

