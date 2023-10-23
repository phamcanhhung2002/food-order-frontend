import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducers = combineReducers({
  cart: cartReducer
})

const pReducer : any= persistReducer<RootState>(persistConfig, rootReducers);


export const store = configureStore({
  reducer: pReducer
})

const persistor = persistStore(store);
export { persistor };


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch