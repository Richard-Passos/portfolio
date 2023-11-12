import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showList: [],
};

const followPointerSlice = createSlice({
  name: 'follow-pointer',
  initialState,
  reducers: {
    showFollowPointer: (state, { payload }) => {
      const isShowing = state.showList.find((id) => id === payload.id);

      if (payload.id && !isShowing) state.showList.push(payload.id);
    },
    hideFollowPointer: (state, { payload }) => {
      const idx = state.showList.findIndex((id) => id === payload.id);

      if (idx >= 0) state.showList.splice(idx, 1);
    },
  },
});

export default followPointerSlice;
export const { showFollowPointer, hideFollowPointer } =
  followPointerSlice.actions;
