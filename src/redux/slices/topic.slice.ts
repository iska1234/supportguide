import { Topic } from '@/types/Topic.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TopicState {
	topics: Topic[];
}

const initialState: TopicState = {
	topics: []
}

const topicSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setTopics: (state, action: PayloadAction<Topic[]>) => {
			state.topics = action.payload
		},

		resetTopicState: () => initialState,
	}
})

export const {
	setTopics,
    resetTopicState
} = topicSlice.actions

export {
	topicSlice
}