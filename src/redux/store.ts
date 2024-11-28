import { configureStore } from '@reduxjs/toolkit';

import { resetUserState, userSlice } from './slices/user.slice';
import { companySettingsSlice, resetCurrentCompanySettings } from './slices/companySettings.slice';
import { resetTopicState, topicSlice } from './slices/topic.slice';


const store = configureStore({
	reducer: {
		
		companySettings: companySettingsSlice.reducer,
		user: userSlice.reducer,
		topic: topicSlice.reducer,
		
	}
})

export const resetAllStates = () => (dispatch: AppDispatch) => {

	dispatch(resetCurrentCompanySettings());

	dispatch(resetUserState());
	dispatch(resetTopicState());
	sessionStorage.removeItem('sessionActive')

};

export type RootStore = typeof store;

export type RootState = ReturnType<RootStore['getState']>

export type AppDispatch = RootStore['dispatch'];

export default store;