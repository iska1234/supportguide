import { configureStore } from '@reduxjs/toolkit';

import { resetUserState, userSlice } from './slices/user.slice';
import { companySettingsSlice, resetCurrentCompanySettings } from './slices/companySettings.slice';


const store = configureStore({
	reducer: {
		
		companySettings: companySettingsSlice.reducer,
		user: userSlice.reducer,
		
	}
})

export const resetAllStates = () => (dispatch: AppDispatch) => {

	dispatch(resetCurrentCompanySettings());

	dispatch(resetUserState());
	sessionStorage.removeItem('sessionActive')

};

export type RootStore = typeof store;

export type RootState = ReturnType<RootStore['getState']>

export type AppDispatch = RootStore['dispatch'];

export default store;