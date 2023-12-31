import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { QuestType } from '../../../types/questType/questType';
import { thunkGetProgress, thunkGetQuests } from './questAsyncThunks';
import type { ProgressType } from '../../../types/progressType/progressType';

const initialState: {
  quests: QuestType[];
  currentQuest: null | QuestType;
  currentUserProgress: ProgressType[];
} = {
  quests: [],
  currentQuest: null,
  currentUserProgress: [],
};

export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    setSelectedQuest: (state, action: PayloadAction<number>) => {
      const quest = state.quests.find((el) => el.id === action.payload);
      if (quest) {
        state.currentQuest = quest;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetQuests.fulfilled, (state, action) => ({
      ...state,
      quests: action.payload, /// почему не работает extraReducers: (builder) => {builder.addCase(thunkGetLocations.fulfilled,(state, action) => (state.locations = action.payload));
    }));
    builder.addCase(
      thunkGetProgress.fulfilled,
      (state, action: PayloadAction<ProgressType[]>) => ({
        ...state,
        currentUserProgress: action.payload, /// почему не работает extraReducers: (builder) => {builder.addCase(thunkGetLocations.fulfilled,(state, action) => (state.locations = action.payload));
      }),
    );
  },
});

export default questSlice.reducer;
export const { setSelectedQuest } = questSlice.actions;
