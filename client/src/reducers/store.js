import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import storage from 'redux-persist/lib/storage'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  
 
  
  
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }



  const UserpersistedReducer = persistReducer(persistConfig, userReducer)
  


export const store1 = configureStore({
    reducer:{
        user : UserpersistedReducer
    },
    
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export let persistor = persistStore(store1);