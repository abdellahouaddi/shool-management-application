import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { notificationsReducer, themeReducer, sidebarReducer, uiReducer } from '../features';
import QuizzesReducer from '../features/quizzes/quizzesSlice';
import FilieresSlice from '../features/filieres/filieresSlice';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  ui: uiReducer,
  quizzes: QuizzesReducer,
  filieres: FilieresSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
