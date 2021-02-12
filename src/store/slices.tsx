import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "setting",

  initialState: {
    languageIndex: 2,
    bibleVersionIndex: 0,
    topicIndex: 1,
    learningToolIndex: 1,
  },

  reducers: {
    setLanguageIndex: (state, action: PayloadAction<number>) => {
      state.languageIndex = action.payload || 0; 
    },
    setBibleVersionIndex: (state, action: PayloadAction<number>) => {
      state.bibleVersionIndex = action.payload || 0;
    },
    setTopicIndex: (state, action: PayloadAction<number>) => {
      state.topicIndex = action.payload || 0;
    },
    setLearningToolIndex: (state, action: PayloadAction<number>) => {
      state.learningToolIndex = action.payload || 0;
    }
  }

})