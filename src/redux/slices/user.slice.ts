import { User } from '@/types/User.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
	users: User[];
	user?: User;
}

const initialState: UserState = {
	users: []
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		},
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload
		},
		resetUserState: () => initialState,
	}
})

export const {
	setUser,
	setUsers,
	resetUserState
} = userSlice.actions

export {
	userSlice
}