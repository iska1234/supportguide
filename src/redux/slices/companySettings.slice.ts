
import { CompanySettings } from '@/types/CompanySettings.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CompanySettingsSlice {
	currentSettings: CompanySettings | null;
}

const initialState: CompanySettingsSlice = {
	currentSettings: null
}

const companySettingsSlice = createSlice({
	name: 'companySettings',
	initialState,
	reducers: {

		setCurrentCompanySettings: (state,action: PayloadAction<CompanySettings>) =>{
			state.currentSettings = action.payload
		},
		resetCurrentCompanySettings: () => initialState,
	}
})

export const {
	setCurrentCompanySettings,
	resetCurrentCompanySettings
} = companySettingsSlice.actions

export {
	companySettingsSlice
}